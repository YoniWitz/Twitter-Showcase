let axios = require('axios');
var qs = require('qs');

const data = qs.stringify({
  grant_type: 'client_credentials'
})

const instance = axios.create({
    baseURL: "https://api.twitter.com/"
})

let getTweetsBySearch = (req, res) => {
    let q = req.params.search;
    let url = '1.1/search/tweets.json';

    instance.get(url,
        {
            params: {
                'q': q,
                'result_type': 'popular',
                'count': 5
            },
            auth: {
                Username: '1d0jI2olncfyjriTNBrch0cft',
                Password: 'rNzLT17cGqO4yBhwissEiRWh4umdUMz8hSDY7ghV9O0Hm7LUbs'
            },
            headers: {
                'Content_Type': "application/json",
                'Accept': "application/json",
                'Authorization': "Bearer AAAAAAAAAAAAAAAAAAAAAEJ1CAEAAAAAfoTX3CluX0CmrsFjDRdm9MsunQc%3DSwWc6bIaGPnB23QeDkOLL2Njr8OHMWlSE81TOyhX5JV7a30tcH"
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
      }).then(respose => {
        console.log(respose);  
      })
      .catch(error => 
        console.log(error)); 
}

module.exports = {
    getBearerByCredentials: getBearerByCredentials,
    getTweetsBySearch: getTweetsBySearch
}
