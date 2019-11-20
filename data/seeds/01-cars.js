
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { vin: '12hsh212232fjfja', make: 'Honda', model: 'Civic', mileage: 0 }
      ]);
    });
};
