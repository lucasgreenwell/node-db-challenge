
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {projectName: 'big flashy project', description: 'big flashy description'},
        {projectName: 'Example', description: 'really describey'},
        {projectName: 'Roddy Rich', description: 'big flashy rapper'}
      ]);
    });
};
