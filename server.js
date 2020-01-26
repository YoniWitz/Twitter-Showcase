const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

let TwitterController = require('./controllers/twitter-controller')

app.get('/', (req, res) => {
    res.send('welcome to my show')
})

app.get('/api/tweets/search/:search', TwitterController.getTweetsBySearch)
app.get('/api/tweets/random', TwitterController.getTweetsByRandomSearch)

listenFunction = () => {
    console.log('up and running');
    TwitterController.getBearerByCredentials();
}

app.listen(port, listenFunction);
