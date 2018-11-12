const reportingRoutes = require('./reporting.js')

module.exports = function(app, db){
  reportingRoutes(app, db);
};
