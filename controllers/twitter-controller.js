let axios = require('axios');

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
            headers: {
                'Content_Type': "application/json",
                'Accept': "application/json",
                'Authorization': "Bearer AAAAAAAAAAAAAAAAAAAAAEJ1CAEAAAAAfoTX3CluX0CmrsFjDRdm9MsunQc%3DSwWc6bIaGPnB23QeDkOLL2Njr8OHMWlSE81TOyhX5JV7a30tcH"
            }
        })
        .then(response => {
            res.send(response.data)
        })
        .catch(error => {
            res.send(error.message)
        });
}

let getBearerByCredentials = (req, res) => {
    let url = 'oauth2/token';

    instance.post(url,
        {
            data: {
                'grant_type': "client_credentials"
            },
            headers: {
                'Content_Type': "application/json",
                'Accept': "application/json"
            },
            auth: {
                Username: '1d0jI2olncfyjriTNBrch0cft',
                Password: 'rNzLT17cGqO4yBhwissEiRWh4umdUMz8hSDY7ghV9O0Hm7LUbs'
            },
        })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error.message)
        });
}

module.exports = {
    getBearerByCredentials: getBearerByCredentials,
    getTweetsBySearch: getTweetsBySearch
}
