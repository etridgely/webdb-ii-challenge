
exports.up = function(knex) {
  return knex.schema.createTable('car-dealer', tbl => {
      tbl.increments('id');
      tbl.string('VIN', 128).unique().notNullable();
      tbl.string('make', 128).unique().notNullable();
      tbl.string('model', 128).unique().notNullable();
      tbl.decimal('mileage');
      tbl.string('transmission');
      tbl.string('titleStatus');
  });
};

exports.down = function(knex) {
  
};
