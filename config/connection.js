// require('dotenv').config();

const Sequelize = require('sequelize');

const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, './.env') })

// const ck = require('ckey');

// const userName = ck.USER;     // sample@gmail.com
// const password = ck.PASSWORD; // iampassword123
// const apiKey   = ck.API_KEY;  // 1234567890

// require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it is working

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
