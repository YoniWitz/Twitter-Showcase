let axios = require('axios');
var qs = require('qs');

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
             response.data.statuses.forEach(tweet =>{
                returnedTweet = {
                    created_at: tweet['created_at'],
                    id:tweet['id'],
                    text: tweet['text']
                }
                returnedTweets.push(returnedTweet)
            })         
            res.send(returnedTweets)
        })
        .catch(error => {
            res.send(error.message)
        });
}

let getTweetsByRandomSearch = (req, res) => {
    console.log('search for tweets')
    let q = "trump";
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
             response.data.statuses.forEach(tweet =>{
                returnedTweet = {
                    created_at: tweet['created_at'],
                    id:tweet['id'],
                    text: tweet['text']
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
            username: '1d0jI2olncfyjriTNBrch0cft',
            password: 'rNzLT17cGqO4yBhwissEiRWh4umdUMz8hSDY7ghV9O0Hm7LUbs'
        },
      }).then(response => {
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
