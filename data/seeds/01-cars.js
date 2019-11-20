
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('car-dealer').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('car-dealer').insert([
        { vin: '12hsh212232fjfja', make: 'Honda', model: 'Civic', mileage: 0 }
        { vin: '2ldkalf3kldkjgld', make: 'Porsche', model: '911', mileage: 100000, transmission: 'manuel', titleStatus: 'clean' }
      ]);
    });
};
