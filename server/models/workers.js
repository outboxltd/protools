const db = require('../db');
const Sequelize = require('sequelize');

module.exports = db.define('workers', {
  name: Sequelize.STRING,
  phone: Sequelize.INTEGER
}, { timestamps: false });
