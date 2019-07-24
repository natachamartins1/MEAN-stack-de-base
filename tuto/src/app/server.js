//serveur démarre ok
const express = require('express')

const Tuto=require ('./models/tuto.js');
const USERS=require ('./models/user.js');
const router = express.Router();
const app = express();
const mongoose =require('mongoose');
var path = require('path');

var apiRouter = require('./routes/tuto.js');
// Handle POST requests that come in formatted as JSON
var bodyParser = require('body-parser');
//app.use(express.json()) // for parsing application/json
//app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); //



app.use(express.static(path.join(__dirname, '../../dist/tuto')));
app.use('/', express.static(path.join(__dirname, '../../dist/tuto')));
app.use('/api', apiRouter);
/*
app.get('/', (req, res) => {
    res.send({hello: 'world'});
});
*/





mongoose.connect('mongodb://localhost:27017/tutos_site', { useNewUrlParser: true,useFindAndModify:false });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});


/*------------------------AUTHENTIFICATION-------------------------------*/
router.route('/api/auth').get((req, res) => {
  USERS.find(req.params.id, req.body,(err, liste) => {
        if (err)
            console.log(err);
        else

    //nb: toString ne marche pas avec express
          console.log("req.params.id");
            res.json(liste);

    });
});
router.post('/api/auth', function(req, res) {
  const body = req.body;

  const user = USERS.find(user => user.username == body.username);
  //if(!user || body.password != 'todo') return res.sendStatus(401);
if(user || body.password == 'todo') return console.log( body.password, body.username);
  var token = jwt.sign({userID: user.id}, 'todo-app-super-shared-secret', {expiresIn: '2h'});
  res.send({token});
});
app.use(expressJwt({secret: 'todo-app-super-shared-secret'}).unless({path: ['/api/auth']}));

/*----------------------------ROUTES-------------------------------------*/
//get tous les tutos

router.route('/tutos').get((req, res) => {
  Tuto.find(req.params.id, req.body,(err, liste) => {
        if (err)
            console.log(err);
        else

    //nb: toString ne marche pas avec express
          console.log(req.params.id);
            res.json(liste);

    });
});

//get détail

router.route('/tutos/details/:id').get((req, res) => {
  Tuto.findById(req.params.id,(err, liste) => {
        if (err)
            console.log(err);
        else
          console.log(req.params.id);
            res.json(liste);

    });
});



//delete
//
//
//

router.route('/tutos/details/:id').delete((req, res, next) => {
  Tuto.findOneAndRemove(req.params.id, (error, data) => {
  if (error) {
  return next(error);
  } else {
  res.status(200).json({
  msg: data
  })
  }
  })
  })



//a tester
//post - ajouter un tuto

router.post('/tutos/add', function(req, res, next) {
  Tuto.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});




// update

router.put('/tutos/details/:id', function(req, res, next) {
Tuto.findByIdAndUpdate(req.params.id, {$set:req.body}, function (err, post) {
    if (err) return next(err);
    res.json(post);




  });
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
