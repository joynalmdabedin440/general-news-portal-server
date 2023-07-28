const express = require('express')
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;


app.use(cors())
const categories = require('./data/categories.json')

app.get('/category', (req, res) => {
    res.send(categories)
})

app.get('/', (req, res) => {
    res.send('News portal is ready')
})

app.listen(port, () => {
    console.log(`This port is Running now ${ port }`)
})