const db = require('./data/db-config');

function addResource (resource){
    return db('resources').insert(resource)
}

function getAllResources(){
    return db('resources').select('*');
}

function addProject (project){
    return db('projects').insert(project)
}

function getAllProjects (){
    return db('projects').select('*');
}

function addTask (task){
    return db('tasks').insert(task)
}

function getAllTasks (){
    return db('tasks').select('*');
}

module.exports = {
    addResource, getAllResources, addProject, getAllProjects, addTask, getAllTasks
}