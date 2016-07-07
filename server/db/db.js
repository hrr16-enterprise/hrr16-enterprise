var config      = require('./knexfile.js');  
var env         = 'production';  
var knex        = require('knex')(config[env]);

module.exports = knex;

knex.migrate.latest([config]); 
