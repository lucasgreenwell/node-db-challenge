const express = require('express');
const cors = require('cors')
const methods = require('./dbAccess')

const server = express();

server.use(express.json());
server.use(cors())


//Projects
server.post('/projects', (req, res) => {
    if (!req.body.projectName){
        res.status(400).json({err: 'you need a name my friend'})
    } else {
        methods.addProject(req.body)
            .then(id => {
                res.status(201).json(id)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({err: "something bad happened. Don't tell mom"})
            })
    }
})

server.get('/projects', (req, res) => {
    methods.getAllProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({err: "something bad happened. Don't tell mom"})
        })
})

//Resources
server.post('/resources', (req, res) => {
    if (!req.body.resourceName){
        res.status(400).json({err: 'you need a name my friend'})
    } else {
        methods.addResource(req.body)
            .then(id => {
                res.status(201).json(id)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({err: "something bad happened. Don't tell mom"})
            })
    }
})

server.get('/resources', (req, res) => {
    methods.getAllResources()
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({err: "something bad happened. Don't tell mom"})
        })
})

//Tasks
server.post('/tasks', (req, res) => {
    if (!req.body.taskName || !req.body.description){
        res.status(400).json({err: 'you need a name and some info my friend'})
    } else if (!req.body.projectId){
        res.status(400).json({err: 'you gotta tell me what project this goes with'})
    } else {
        methods.addTask(req.body)
            .then(id => {
                res.status(201).json(id)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({err: "something bad happened. Don't tell mom"})
            })
    }
})

module.exports = server;