const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//bodyParser middleware
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose.connect(db)
    .then(() => console.log('Database Connected'))
    .catch(err => console.log(err))

const port = process.env.PORT || 5000

app.listen(port, ()=> console.log('server started..'));