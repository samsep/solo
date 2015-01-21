(function() {

  'use strict';
  var express = require('express');
  var router = express.Router();
  var mongojs = require('mongojs');
  var db = mongojs('meanTodo', ['todos']);
  var request = require("request");

  /* GET home page. */
  router.get('/', function(req, res) {
    res.render('index');
    
  });

  router.get('/api/todos', function(req, res) {
    // db.todos.find(function(err, data) {
    //   res.json(data);
    // });
    // console.log('inside api/todos');
    request("https://www.kimonolabs.com/api/99bi2zyc?apikey=J4e2htUUqYIGn97d2bKU9L0DDxCs1Tns", 
      function(err, response, body) {
        if (err) {
          console.log('error occurred')
        }
      res.send(body);
    });
  });

  router.get('/api/todosElecs', function(req, res) {
    // db.todos.find(function(err, data) {
    //   res.json(data);
    // });
    // console.log('inside api/todos');
    request("https://www.kimonolabs.com/api/2rp4jbkw?apikey=J4e2htUUqYIGn97d2bKU9L0DDxCs1Tns", 
      function(err, response, body) {
        if (err) {
          console.log('error occurred')
        }
      res.send(body);
    });
  });

  router.get('/api/todosHouse', function(req, res) {
    // db.todos.find(function(err, data) {
    //   res.json(data);
    // });
    // console.log('inside api/todos');
    request("https://www.kimonolabs.com/api/70wd511g?apikey=J4e2htUUqYIGn97d2bKU9L0DDxCs1Tns", 
      function(err, response, body) {
        if (err) {
          console.log('error occurred')
        }
      res.send(body);
    });
  });

  router.post('/api/todos', function(req, res) {
    db.todos.insert(req.body, function(err, data) {
      res.json(data);
    });

  });

  router.put('/api/todos', function(req, res) {

    db.todos.update({
      _id: mongojs.ObjectId(req.body._id)
    }, {
      isCompleted: req.body.isCompleted,
      todo: req.body.todo
    }, {}, function(err, data) {
      res.json(data);
    });

  });

  router.delete('/api/todos/:_id', function(req, res) {
    db.todos.remove({
      _id: mongojs.ObjectId(req.params._id)
    }, '', function(err, data) {
      res.json(data);
    });

  });

  module.exports = router;

}());
