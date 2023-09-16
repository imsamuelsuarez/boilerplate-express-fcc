let express = require('express');
let app = express();

console.log('Hello World')

app.use('/', (req, res) => {
    res.send('Hello World')
})
































 module.exports = app;
