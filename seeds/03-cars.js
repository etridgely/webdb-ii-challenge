
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('car-dealer').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('car-dealer').insert([
        { vin: '12hsh215454545jfja', make: 'Honda', model: 'Accord', mileage: 0 },
        { vin: '2ldk454545454kldkjgld', make: 'Ferrari', model: 'Dope Car', mileage: 100000, transmission: 'manuel', titleStatus: 'clean' }
      ]);
    });
};