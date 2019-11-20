const knex = require('knex');
const config = require('../knexfile');

modules.export = knex(config.development);