const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3001;
const path = require('path')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

let TwitterController = require('./controllers/twitter-controller')

app.get('/api/tweets/search/:search', TwitterController.getTweetsBySearch)
app.get('/api/tweets/random', TwitterController.getTweetsByRandomSearch)

//set static folder
app.use(express.static(__dirname + "/client/build"));

app.get(/.*/, function (req, res) {
    res.sendfile(path.resolve(__dirname + 'client', 'build', 'index.html'));
});

listenFunction = () => {
    console.log(`up and running on port ${port}`);
    TwitterController.getBearerByCredentials();
}

app.listen(port, listenFunction);
