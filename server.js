let express = require('express');
let app = express();
let port = 3001;


let TwitterController = require('./controllers/twitter-controller')

app.get('/', (req, res) => {
    res.send('welcome to my show')
})

app.get('/api/search/:search', TwitterController.getTweetsBySearch)

listenFunction = () => console.log('up and running')
app.listen(port, listenFunction);

