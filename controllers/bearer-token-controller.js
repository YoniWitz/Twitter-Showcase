const axios = require('axios');
const qs = require('qs');

let bearer;

let getBearerByCredentials = async () => {
    if (bearer) return bearer;

    const data = qs.stringify
    ({
        grant_type: 'client_credentials'
    })

    return await axios.request
    ({
        url: 'oauth2/token',
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
        return bearer;
    })
    .catch(error => console.error(error));
}

module.exports = {
    getBearerByCredentials
}