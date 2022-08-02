var express = require('express');
var router = express.Router();
const todos = require('../data/todos');


router.get('/', function(req, res, next) {
  res.render('index', { todos });
});


router.post('/todos', function(req, res) {
  // req.body.fullTank = true;
  todos.push(req.body);
  console.log(todos);
  res.redirect('/');
});

router.delete('/todos/:idx', function(req, res) {
  todos.splice(req.params.idx, 1);
  res.redirect('/');
});

module.exports = router;