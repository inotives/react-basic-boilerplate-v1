var express = require('express');
var router = express.Router();


router.use(function(req, res, next){
  // do logging
  console.log(req);
  next();
});

// test route
router.get('/users', function(req, res){
  var user = [
    {id: 1, name: "Toni", phone: "1234-5678", email: "toni@gmail.com"},
    {id: 2, name: "James", phone: "1234-5678", email: "james@gmail.com"},
    {id: 3, name: "Susan", phone: "1234-5678", email: "susan@gmail.com"}
  ];
  res.json(user);
});

router.get('/users/:id', function(req, res){
  res.json({
    id: req.params.id,
    name: 'toni',
    phone: "1234-5678",
    email: "toni@gmail.com"
  });
})

module.exports = router;
