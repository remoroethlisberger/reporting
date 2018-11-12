const express = require('express');
const mysql = require('mysql');
const path = require('path');
const dbconfig = require('./db/config.js').db;

const db = mysql.createConnection({
  host: dbconfig.host,
  user: dbconfig.user,
  password: dbconfig.password,
  database: dbconfig.database
});

db.connect(function(error){
  if(error){
    console.error('Error connecting to database');
    console.error(e);
    return;
  }else{
    console.log('Connected to DB on ' + dbconfig.host + '.' + dbconfig.database);
  }
});

const app = express();

// Serve the static content of the dist folder
app.use(express.static('dist'));

// Serve all the routes defined in our API
require('./routes/routes.js')(app, db);

// Serve everything else from index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'dist', 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log('Example app listening on port: ' + PORT);
});
