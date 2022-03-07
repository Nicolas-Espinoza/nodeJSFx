const express = require('express');
const cors = require('cors');
const app = express()
require('dotenv').config();
require('../config/database');

var path = require('path');
const router = require('./routes/index');
const bodyParser = require('body-parser');

//MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


app.use('/api', router);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + "/client/build/index.html"))
    })
}

const port = process.env.PORT || 3090
const host = process.env.HOST || '0.0.0.0'

app.listen(port, host, () => console.log(`App listening on port ${port}`))