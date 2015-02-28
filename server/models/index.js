var db = require('../db');
var app = require('../app.js');
var Sequelize = require('sequelize');

var sequelize = new Sequelize('chat', 'root', '');

var User = sequelize.define('user', {
  Username: Sequelize.STRING
});

var Message = sequelize.define('message', {
  Username: Sequelize.STRING,
  Message: Sequelize.STRING,
  Room: Sequelize.STRING
});

Message.sync().success(function(){
  console.log("Message.sync() success!!")
});

User.sync().success(function(){
  console.log("User.sync() success!!")
});

module.exports = {
  messages: {
    get: function (req, res) {
      var results = Message.findAll().success(function(msg){
        res.send(msg);
      });

      // app.connection.query("SELECT * FROM messages", function(err, results) {
      //   if (err) {
      //     throw err;
      //   }
      //   res.send(results);

      // });

    }, // a function which produces all the messages
    post: function (req, res) {
      var message = req.body.message.replace("'", "\\'");
      var newMessage = Message.build({
        Username: req.body.username,
        Message: message,
        Room: req.body.roomname
      });
      newMessage.save().success(function(data){
        res.send("Great work posting!");
      })
    } // a function which can be used to insert a message into the database
  },

  users: {
    get: function (req, res) {
      var results = Users.findAll().success(function(users){
        res.send(users);
      });
    },
    post: function (req, res) {
     var newUser = User.build({
       Username: req.body.username
     });
     newUser.save().success(function(data){
       res.send("Great work posting!");
     })
    }
  }
};

