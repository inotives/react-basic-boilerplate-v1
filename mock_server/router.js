var express = require('express');
var router = express.Router();


router.use(function(req, res, next){
  // do logging
  next();
});

// test route
router.get('/users', function(req, res){
  var user = [
    {id: 1, name: "Toni Lim", phone: "1234-5678", email: "toni@gmail.com"},
    {id: 2, name: "James Moore", phone: "1234-5678", email: "james@gmail.com"},
    {id: 3, name: "Susan Boyle", phone: "1234-5678", email: "susan@gmail.com"},
    {id: 4, name: "Janes Doe", phone: "1234-5678", email: "janes@gmail.com"},
    {id: 5, name: "Holkan Palmer", phone: "1234-5678", email: "holkan@gmail.com"},
    {id: 6, name: "Inox Calter", phone: "1234-5678", email: "inox@gmail.com"},
    {id: 7, name: "Camban Holmes", phone: "1234-5678", email: "camban@gmail.com"},
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
