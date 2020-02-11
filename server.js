const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 
const port = process.env.PORT || 3001;
const path = require('path');
const twitterController = require('./controllers/twitter-controller');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/tweets/search/:search', twitterController.getTweetsBySearch)
app.get('/api/tweets/random', twitterController.getTweetsByRandomSearch)

//set static folder
app.use(express.static(__dirname + "/client/build"));

app.get(/.*/, function (req, res) {
    res.sendFile(path.resolve(__dirname + '/client', 'build', 'index.html'));
});

app.listen(port, () =>{
    console.log(`up and running on port ${port}`);
});
