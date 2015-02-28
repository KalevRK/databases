var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
      console.log('get in controller');
      models.messages.get(req, res);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('post in controller');
      models.messages.post(req, res);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('users get in controller');
      models.users.get(req, res);
    },
    post: function (req, res) {
      console.log('users post in controller');
      models.users.post(req, res);
    }
  }
};

