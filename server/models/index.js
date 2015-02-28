var db = require('../db');
var app = require('../app.js');

module.exports = {
  messages: {
    get: function (req, res) {
      var query = app.connection.query('SELECT * FROM messages');
      res.send(query);
      res.end();
    }, // a function which produces all the messages
    post: function (req, res) {
      console.log("we're in models post method, and here's req.body ", req.body)
      var queryString = 'INSERT INTO messages (Username, Message, Room) ' +
      'VALUES (' + req.body.username + ',' + req.body.message + ',' + req.body.roomname + ')';

      var query = app.connection.query(queryString);
      res.end("All done here");
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

