const mysql = require('mysql');
const dbconfig = require('./config.js').db;

const db = mysql.createConnection({
  host: dbconfig.host,
  user: dbconfig.user,
  password: dbconfig.password,
  database: dbconfig.database
});

db.connect(function(error){
  if(error){
    console.error('Error connecting to database');
    console.error(error);
    return;
  }else{
    console.log('Connected to DB on ' + dbconfig.host + '.' + dbconfig.database);
  }
});

module.exports = db
