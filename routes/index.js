var express = require('express');
var router = express.Router();

/* Banco de dados PostgreSQL */
var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgreSQL://localhost:5432/DB_Graph'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
