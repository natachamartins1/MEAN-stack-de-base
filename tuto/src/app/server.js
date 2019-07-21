//serveur démarre ok
const express = require('express')

const Tuto=require ('./models/tuto.js');
const router = express.Router();
const app = express();
const mongoose =require('mongoose');
var path = require('path');

var apiRouter = require('./routes/tuto.js');
// Handle POST requests that come in formatted as JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// A default hello word route


app.use(express.static(path.join(__dirname, '../../dist/tuto')));
app.use('/', express.static(path.join(__dirname, '../../dist/tuto')));
app.use('/api', apiRouter);
/*
app.get('/', (req, res) => {
    res.send({hello: 'world'});
});
*/





mongoose.connect('mongodb://localhost:27017/tutos_site', { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});








app.use('/', router);
/*
Utilise node.js => bin/www
// start our server on port 4201
app.listen(349, '127.0.0.1', function() {
    console.log("Server now listening on 4201");
});
*/


module.exports = app;
