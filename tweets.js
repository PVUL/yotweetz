var Twitter = require('twitter');

module.exports = function(res, screen_name) {
  var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });

  var params = {
    screen_name: screen_name, // twitter username
    count: 20 // number of tweets to get
  };

  function gotData(error, timeline_tweets, response) {
    if (error)
      throw error;

    res.render('list', { tweets: timeline_tweets });
  };

  client.get('/statuses/user_timeline', params, gotData);
}
