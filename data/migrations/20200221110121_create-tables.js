
exports.up = function (knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments();
        tbl.text('projectName', 128)
            .notNullable()
        tbl.text('description')
        tbl.boolean('completed').defaultTo(false).notNullable()
    }).createTable('tasks', tbl => {
        tbl.increments();
        tbl.text('taskName', 128).notNullable()
        tbl.text('description').notNullable()
        tbl.text('notes')
        tbl.boolean('completed').defaultTo(false).notNullable()
        tbl.integer('projectId')
            .unsigned().notNullable().references('id').inTable('projects')
    }).createTable('resources', tbl => {
        tbl.increments();
        tbl.text('resourceName', 128).notNullable()
        tbl.text('description')
    })
        .createTable('resourcesProjects', tbl => {
            tbl.integer('projectId').notNullable().unsigned().references('id').inTable('projects').onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('resourceId').notNullable().unsigned().references('id').inTable('resources').onUpdate('CASCADE')
                .onDelete('CASCADE');

        })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('resourcesProjects').dropTableIfExists('resources').dropTableIfExists('tasks').dropTableIfExists('projects')
};
