
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {taskName: 'taskname', taskDescription: 'description complete', projectId: '2'},
        {taskName: 'secodn task', taskDescription: 'description in progress', projectId: '2'},
        {taskName: 'gotta do stuff', taskDescription: 'description ', projectId: '1'},
      ]);
    });
};
