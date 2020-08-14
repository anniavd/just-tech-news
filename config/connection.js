//import the sequelize constructor from his lebrary
const Sequelize=require('sequelize')
require('dotenv').config();

//create the connection to the local batabase
let sequelize;
// for heroku
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
   //for local database
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}


module.exports = sequelize;