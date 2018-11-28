const express = require('express');
const path = require('path');
const db = require('./db/database.js');

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
