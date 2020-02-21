const db = require('./data/db-config');

function addResource(resource) {
    return db('resources').insert(resource)
}

function getAllResources() {
    return db('resources').select('*');
}

function getAssociatedResources(projectId){
    return db('resourcesProjects').join('resources', 'resourcesProjects.resourceId', '=', 'resources.id').select('*').where({projectId:projectId})
}

function addProject(project) {
    return db('projects').insert(project)
}

function getAllProjects() {
    return db('projects').select('*');
}

function deleteProject (id) {
    return db('projects').select('*').where({id: id}).del()
}

function editProject (id, changes) {
    return db('projects').select('*').where({id: id}).update({...changes})
}


function getThisProject (id){
    return db('projects').select('*').where({id: id})
}

function addTask(task) {
    return db('tasks').insert(task)
}

function getAllTasks() {
    return db('tasks').join('projects', 'tasks.projectId', '=', 'projects.id').select('*');
}

function getAssociatedTasks(projectId){
    return db('tasks').select('*').where({projectId: projectId})
}

function deleteTask (id) {
    return db('tasks').select('*').where({id: id}).del()
}

function editTask (id, changes) {
    return db('tasks').select('*').where({id: id}).update({...changes})
}

module.exports = {
    editProject,editTask, addResource, getAllResources, addProject, getAllProjects, deleteProject, addTask, getAllTasks,deleteTask, getThisProject, getAssociatedTasks, getAssociatedResources
}