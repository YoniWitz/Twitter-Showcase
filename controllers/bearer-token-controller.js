const axios = require('axios');
const qs = require('qs');

let bearer;

let getBearerByCredentials = async () => {
    if(bearer) return bearer;
    
    console.log(`username = ${process.env.API_TWITTER_USERNAME}`);
    const data = qs.stringify({
        grant_type: 'client_credentials'
    })
    return await axios.request({
        url: 'oauth2/token',
        method: "post",
        baseURL: "https://api.twitter.com/",
        data,
        auth: {
            username: process.env.API_TWITTER_USERNAME,
            password: process.env.API_TWITTER_PASSWORD
        },
    })
        .then(response => {
            bearer = response.data['access_token'];
            return bearer;
        })
        .catch(error =>
            console.error(error));
}

module.exports = {
    getBearerByCredentials: getBearerByCredentials
}