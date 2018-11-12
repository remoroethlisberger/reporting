module.exports = function(app, db){
  app.get('/api/reporting/:id', (req, res) => {
    db.query('SELECT * FROM constructions WHERE id = ?', [req.params.id], (err,rows) => {
      if(err) throw err;
      console.log('Data received from Db:\n');
      console.log(rows);

      console.log(req.params);
      res.send(rows);
    });
  })
}
