//=========================================
// Knex setup for production or development
//=========================================
 
var config      = require('./knexfile.js');  
var env         = 'development';  
var knex        = require('knex')(config[env]);

module.exports = knex;
// knex uses latest database schema 
knex.migrate.latest([config]); 
