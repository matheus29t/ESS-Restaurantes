var express = require('express');
const req = require('express/lib/request');
const { getMaxListeners } = require('../app');
var router = express.Router();

var users = [
  {
    email:'lin@gmail.com', password:'liminha69'
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Welcome to backend server");
});

router.post('/login', function(req, res){
  let result = users.find(user => user.email == req.body.email);
  if (result) {
    if (result.password == req.body.password){
      res.status(200).send( {
        message: "Successful login!"
      })
    }
    else {
      res.status(200).send( {
        message: "Password Incorrect!"
      })
    }
  } else {
      res.status(200).send( {
        message: "User Not Found!"
      })
  }
})

module.exports = router;
