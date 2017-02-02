var Sequelize = require('sequelize');
var db = require('./_db');

var Day = db.define('day', {
  number: {
    type: Sequelize.INTEGER
  }
}, {
  getterMethods: {
    dayNumber: function() {
      return this.number
    }
  }
})

module.exports = Day;
