let express = require('express');
let app = express();
let port = 3001;

let TwitterController = require('./controllers/twitter-controller')

app.get('/', (req, res) => {
    res.send('welcome to my show')
})

app.get('/api/tweets/search/:search', TwitterController.getBearerByCredentials)

listenFunction = () => {
    console.log('up and running');
    TwitterController.getBearerByCredentials();
}

app.listen(port, listenFunction);
