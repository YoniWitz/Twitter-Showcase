let axios = require('axios');
var qs = require('qs');
var moment = require('moment');
require('dotenv').config();

const data = qs.stringify({
    grant_type: 'client_credentials'
})

let bearer;

const instance = axios.create({
    baseURL: "https://api.twitter.com/"
})

let getTweetsBySearch = (req, res) => {
    console.log('search for tweets')
    let q = req.params.search;
    twitterSearchApi(q, res);
}

let getTweetsByRandomSearch = (req, res) => {
    let people = ['Elon Musk', 'Neil Armstrong', 'Elizabeth Warren', 'Tom Hanks', 'Drake']
    let q = people[Math.floor(Math.random() * people.length)];
    console.log(q);
    twitterSearchApi(q, res);
}

let twitterSearchApi = (q, res) => {
    let url = '1.1/search/tweets.json';

    instance.get(url,
        {
            params: {
                'q': q,
                'result_type': 'popular',
                'count': 5
            },
            headers: {
                'Content_Type': "application/json",
                'Accept': "application/json",
                'Authorization': `Bearer ${bearer}`
            }
        })
        .then(response => {
            let returnedTweets = []
            response.data.statuses.forEach(tweet => {
                returnedTweet = {
                    date: moment(tweet['created_at'], 'ddd MMM DD HH:mm:ss Z YYYY').format('MMM DD YYYY HH:MM'),
                    id: tweet['id'],
                    text: tweet['text'].substring(0, tweet['text'].lastIndexOf(" ")),
                    src: tweet['user']['profile_image_url'],
                    name: tweet['user']['name'],
                    screen_name: tweet['user']['screen_name'],
                    retweet_count: tweet["retweet_count"],
                    favorite_count: tweet["favorite_count"]
                }
                returnedTweets.push(returnedTweet)
            })
            res.send(returnedTweets)
        })
        .catch(error => {
            res.send(error.message)
        });
}

let getBearerByCredentials = () => {
    let url = 'oauth2/token';
    axios.request({
        url: url,
        method: "post",
        baseURL: "https://api.twitter.com/",
        data,
        auth: {
            username: process.env.API_TWITTER_CONSUMER_KEY,
            password: process.env.API_TWITTER_SECRET
        },
    })
        .then(response => {
            bearer = response.data['access_token'];
        })
        .catch(error =>
            console.log(error));
}

module.exports = {
    getBearerByCredentials: getBearerByCredentials,
    getTweetsBySearch: getTweetsBySearch,
    getTweetsByRandomSearch: getTweetsByRandomSearch
}
