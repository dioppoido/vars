var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

//　sessionモジュール読み込み
const session = require('express-session');
const mongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo/vars');

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

app.use('/test', require('./routes/test'));
// app.use('/admin',require('./routes/admin'));
// app.use('/adminlogin',require('./routes/adminlogin'));
// app.use('/adminlist',require('./routes/adminlist'));
// app.use('/externaledit',require('./routes/externaledit'));
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
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
