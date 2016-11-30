if (process.argv.length < 3) {
    return;
}

process.stdout.setEncoding('UTF-8');
process.stderr.setEncoding('UTF-8');

var Twitter = require('twitter');

var bot = new Twitter({
    consumer_key        : '8X8iqFLapyygLokUz590Hc5Ey',
    consumer_secret     : 'MgcaNpPwYiZjneGdMEqK4QqFQ6MWk7MO9q1bohyz8gYAP0SlBx',
    access_token_key    : '779129321088622592-MuvKrKkflKmOYsitWt6M6Gb4veHq94s',
    access_token_secret : 'vvo3MzKBXbUmtC5cT7lFqg2dmEFQbdkUwsjRqjnD3LL9z'
});

var postedTweet = '';

for (var i = 2, len = process.argv.length; i < len; i++) {
    if (i < (len - 1)) {
        postedTweet += process.argv[i] + '\n';
    } else {
        postedTweet += process.argv[i];
    }
}

bot.post('statuses/update', {status : postedTweet}, function(error, tweet, response) {
    if (error) {
        process.stderr.write(error + '\n');
        return;
    }
});

bot.get('statuses/user_timeline', function(error, tweets, response) {
    if (error) {
        process.stderr.write(error + '\n');
        return;
    }

    tweets.forEach(function(tweet) {
        process.stdout.write(tweet.created_at + ' >> ' + tweet.text + '\n');
    });
});

/*
bot.stream('statuses/filter', {track : 'JavaScript'}, function(stream) {
    stream.on('data', function(tweet) {
        console.log(tweet.text);
    });
    stream.on('error', function(error) {
        console.error(error);
    });
});
*/
