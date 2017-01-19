var express = require('express');
var path = require('path');
var googlelogin = require('./config/googlelogin.json')
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');


//　sessionモジュール読み込み
const session = require('express-session');
const mongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo/vars');

//Google認証用のモジュール読み込み
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;


passport.use(new GoogleStrategy(
    googlelogin.googlelogin,
    function(token, tokenSecret, profile, done) {
      process.nextTick(function () {
        return done(null, profile);
      });
    }
));


var app = express();

app.use(passport.initialize());
app.use(passport.session());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//  拡張子 htm,htmlのテンプレートエンジンを指定
app.engine('htm', require('ejs').renderFile);
app.engine('html', require('ejs').renderFile);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// セッション設定
app.use(session({
  secret: 'secret sams',         //Cookie暗号化キー
  saveUninitialized: true,
  resave: true,
  store: new mongoStore({
    mongooseConnection: mongoose.connection,      //mongoDB接続
    db: 'vars', // データベース名
    host: 'mongo', // データベースのアドレス
    port: '27017',
    clear_interval: 60 * 60 * 3 // 保存期間(sec)
  }),
  cookie: {
    httpOnly: false, // cookieへのアクセスをHTTPのみに制限
    maxAge: 60 * 60 * 3 * 1000 // クッキーの有効期限(msec)
  }
}));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// htmlからフォルダを参照
app.use('/app', express.static(__dirname + '/app'));
app.use('/public', express.static(__dirname + '/public'));
app.use('/views', express.static(__dirname + '/views'));
app.use('/upfile', express.static(__dirname + '/upfile'));

//ここからルート設定
//トップ画面
app.use('/', require('./routes/index'));
//ログイン
app.use('/login', require('./routes/login'));
//Google認証
app.use('/googlelogin',require('./routes/googlelogin'));
//ログアウト
app.use('/logout', require('./routes/logout'));
//アカウント設定
app.use('/account',require('./routes/account'));
//確認画面
app.use('/confirmation',require('./routes/confirmation'));
//イベント作成
app.use('/eventcreate',require('./routes/eventcreate'));
//イベントリスト
app.use('/eventlist',require('./routes/eventlist'));
//イベントトップ
app.use('/eventtop',require('./routes/eventtop'));
//チーム作成
app.use('/teamcreate',require('./routes/teamcreate'));
//チームリスト
app.use('/teamlist',require('./routes/teamlist'));
//イベント管理
app.use('/eventcontrol',require('./routes/eventcontrol'));
//投票
app.use('/vote',require('./routes/vote'));
//投票結果
app.use('/voteresult',require('./routes/voteresult'));
//投票チームの抽出(test)
app.use('/getTeam',require('./routes/getTeam'));
//bootstraptemplate
app.use('/boot',require('./routes/boot'));
//multerテスト
app.use('/multer',require('./routes/multer'));
//Aggregateテスト
app.use('/aggregate',require('./routes/aggregate'));
//パスワードページ
app.use('/password',require('./routes/password'));
//チームトップ
app.use('/teamtop',require('./routes/teamtop'));
//チーム管理
app.use('/teamcontrol',require('./routes/teamcontrol'));

//admin・外部ユーザー管理
app.use('/admin',require('./routes/admin'));
app.use('/adminlogin',require('./routes/adminlogin'));
app.use('/adminlist',require('./routes/adminlist'));
app.use('/externaledit',require('./routes/externaledit'));
// app.use('/adminedit',require('./routes/adminedit'));
// app.use('/adminedit',require('./routes/adminedit'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error.ejs', {
      message: err.message,
      error: err,
      status: err.status
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error.ejs', {
    message: err.message,
    error: {},
    status: err.status
  });
});


module.exports = app;
