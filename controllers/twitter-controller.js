const axios = require('axios');
const moment = require('moment');
const bearerTokenService = require('./bearer-token-controller');

require('dotenv').config();

const instance = axios.create({
    baseURL: "https://api.twitter.com/"
})

let getTweetsBySearch = (req, res) =>  twitterSearchApi(req.params.search, res);

let getTweetsByRandomSearch = (req, res) => {
    let people = ['Elon Musk', 'Neil Armstrong', 'Elizabeth Warren', 'Tom Hanks', 'Drake']
    let q = people[Math.floor(Math.random() * people.length)];
    twitterSearchApi(q, res);
}

let twitterSearchApi = async (q, res) => {
    let url = '1.1/search/tweets.json';

    instance
    .get(url,
    {
        params: {
               'q': q,
            'result_type': 'popular',
            'count': 5
        },
        headers: {
            'Content_Type': "application/json",
            'Accept': "application/json",
            'Authorization': `Bearer ${await bearerTokenService.getBearerByCredentials()}`
        }
    })
    .then(response => {
        let returnedTweets =  response.data.statuses.map(tweet => {
            return {
                date: moment(tweet['created_at'], 'ddd MMM DD HH:mm:ss Z YYYY').format('MMM DD YYYY HH:MM'),
                id: tweet['id'],
                text: tweet['text'].substring(0, tweet['text'].lastIndexOf(" ")),
                src: tweet['user']['profile_image_url'],
                name: tweet['user']['name'],
                screen_name: tweet['user']['screen_name'],
                retweet_count: tweet["retweet_count"],
                favorite_count: tweet["favorite_count"]
            };
        });
       res.send(returnedTweets)
    })
    .catch(error => res.send(error.message));
}

module.exports = {
    getTweetsBySearch: getTweetsBySearch,
    getTweetsByRandomSearch: getTweetsByRandomSearch
}
