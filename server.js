let express = require('express');
let app = express();
let port = 3001
let axios = require('axios')

app.get('/', (req, res) => {
    res.send('welcome to my show')
})
app.listen(port, () => console.log('up and running'));