
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {taskName: 'taskname', description: 'description complete', projectId: '2'},
        {taskName: 'secodn task', description: 'description in progress', projectId: '2'},
        {taskName: 'gotta do stuff', description: 'description ', projectId: '1'},
      ]);
    });
};
