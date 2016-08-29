var express = require('express');
var router = express.Router();

/* Banco de dados PostgreSQL */
var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgreSQL://localhost:5432/DB_Graph'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  res.sendFile(path.join(__dirname, '../public', 'index.html'))
});

module.exports = router;


/* READ */
router.get('/api/v1/dados', function(req, res) {

    var results = [];

    // Get a Postgres client from the connection pool
    pg.connect(connectionString, function(err, client, done) {
        // Handle connection errors
        if(err) {
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }

        // SQL Query > Select Data
        var query = client.query("SELECT * FROM dadosgraficos;");

        // Stream results back one row at a time
        query.on('row', function(row) {
            results.push(row);
        });

        // After all data is returned, close connection and return results
        query.on('end', function() {
            done();
            return res.json(results);
            alert('fudeu');
        });

    });

});
