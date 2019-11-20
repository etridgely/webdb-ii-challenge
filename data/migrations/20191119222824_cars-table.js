
exports.up = function(knex) {
  return knex.schema.createTable('car-dealer', tbl => {
      tbl.increments('id');
      tbl.string('VIN', 128).unique().notNullable();
      tbl.string('make', 128).notNullable();
      tbl.string('model', 128).notNullable();
      tbl.integer('mileage').notNullable();
      tbl.string('transmission');
      tbl.string('titleStatus');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExits('car-dealer');
};
