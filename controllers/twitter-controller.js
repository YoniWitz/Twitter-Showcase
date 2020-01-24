let axios = require('axios');

let getTweetsBySearch = (req, res) => {
    let q = req.params.search;
    let url = 'https://api.twitter.com/1.1/search/tweets.json'
    console.log(url);
    axios.get(url, {
        params: {
            'q': q,
            'result_type': 'popular',
            'count': 5

        },
        auth: {
            'username': '1d0jI2olncfyjriTNBrch0cft',
            'password': 'rNzLT17cGqO4yBhwissEiRWh4umdUMz8hSDY7ghV9O0Hm7LUbs'
        },
        headers: {
            'Content_Type': "application/json",
            'Accept': "application/json",
            'Authorization': "Bearer AAAAAAAAAAAAAAAAAAAAAEJ1CAEAAAAAfoTX3CluX0CmrsFjDRdm9MsunQc%3DSwWc6bIaGPnB23QeDkOLL2Njr8OHMWlSE81TOyhX5JV7a30tcH"
        }
    })
        .then(response =>{
            res.send(response.data)
        })
        .catch(error =>{
            res.status(500).send(error)
        });
}

exports.getTweetsBySearch = getTweetsBySearch;