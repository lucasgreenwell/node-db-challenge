
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resourceName: 'oil', description: 'description complete'},
        {resourceName: 'gold', description: "don't run out"},
        {resourceName: 'blood', description: "definitely don't run out"}
      ]);
    });
};
