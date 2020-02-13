const axios = require('axios');
const qs = require('qs');

let bearer;

let getBearerByCredentials = () => {
    if (!bearer) {
        const data = qs.stringify
            ({
                grant_type: 'client_credentials'
            })

        bearer = axios.request
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
            .then(response => response.data['access_token'])
            .catch(error => console.error(error));
    }

    return bearer;
}

module.exports = {
    getBearerByCredentials
}