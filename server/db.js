const Sequelize = require('sequelize');

const sequelize = new Sequelize('protools', 'root', 'root', {
  host: 'localhost',
  port: '8889',
  dialect: 'mysql'
});



sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;


// גישה עם שרת מרוחק
// module.exports = new Sequelize('protools', 'giladbenatiya', 'time4newpass', {
//   host: '160.153.16.62',
//   dialect: 'mysql'
// });
