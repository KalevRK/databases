var db = require('../db');
var app = require('../app.js');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log("we're in models messages GET method, and here's req.body ", req.body)
      var query = app.connection.query('SELECT * FROM messages');
      res.send(query);
    }, // a function which produces all the messages
    post: function (req, res) {
      console.log("we're in models messages POST method, and here's req.body ", req.body)
      //TODO: Fix apostrophe handling in message for query
      // var message = req.body.message.replace("'", "\'");
      var queryString = "INSERT INTO messages (Username, Message, Room) " +
      "VALUES ('" + req.body.username + "','" + req.body.message + "','" + req.body.roomname + "')";

      var query = app.connection.query(queryString);
      res.end("All done here");
    } // a function which can be used to insert a message into the database
  },

  users: {
    get: function (req, res) {
      console.log("we're in models users GET method, and here's req.body ", req.body)
      var query = app.connection.query('SELECT * FROM users');
      res.send(query);
    },
    post: function (req, res) {
      console.log("we're in models users POST method, and here's req.body ", req.body)
      var queryString = "INSERT INTO users (Username) " +
      "VALUES ('" + req.body.username + "')";
      console.log('queryString in POST in users in models: ', queryString);
      var query = app.connection.query(queryString);
      res.end("All done here");
    }
  }
};

