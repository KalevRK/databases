var db = require('../db');
var app = require('../app.js');

module.exports = {
  messages: {
    get: function (req, res) {
      app.connection.query("SELECT * FROM messages", function(err, results) {
        if (err) {
          throw err;
        }

        console.log("query results: ",results);
        res.send(results);

      });

    }, // a function which produces all the messages
    post: function (req, res) {
      var message = req.body.message.replace("'", "\\'");
      var queryString = "INSERT INTO messages (Username, Message, Room) " +
      "VALUES ('" + req.body.username + "','" + message + "','" + req.body.roomname + "')";

      app.connection.query(queryString, function(err, results) {
        if (err) {
          throw err;
        }
        res.end("All done here");
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    get: function (req, res) {
      console.log("we're in models users GET method, and here's req.body ", req.body)
      var query = app.connection.query('SELECT * FROM users');
      res.send(query);
    },
    post: function (req, res) {
      var queryString = "INSERT INTO users (Username) " +
      "VALUES ('" + req.body.username + "')";
      var query = app.connection.query(queryString);
      res.end("All done here");
    }
  }
};

