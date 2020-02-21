
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resourcesProjects').del()
    .then(function () {
      // Inserts seed entries
      return knex('resourcesProjects').insert([
        {resourceId: 1, projectId: 1},
        {resourceId: 1, projectId: 3},
        {resourceId: 2, projectId: 1},
      ]);
    });
};
