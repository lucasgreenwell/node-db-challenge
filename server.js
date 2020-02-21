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

server.get('/projects/:id', (req, res) => {
   methods.getThisProject(req.params.id)
    .then(proj => {
        if (proj){
            methods.getAssociatedTasks(req.params.id)
                .then(tasks => {
                    methods.getAssociatedResources(req.params.id)
                        .then(resources => {
                            res.status(200).json({...proj, tasks: tasks, resources: resources})
                        })
                })
        }else {
            res.status(404).json({err: "couldn't find that one"})
        }
    })
    .catch(err => {
            console.log(err)
            res.status(500).json({err: "something bad happened. Don't tell mom"})
        })
})

server.delete('/projects/:id', (req,res)=> {
    methods.deleteProject(req.params.id)
        .then(num => {
            if(num > 0){
                res.status(204).end()
            }
            else(
                res.status(404).json({err: 'coulnt find it'})
            )
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({err: "something bad happened. Don't tell mom"})
        })
})

server.put('/projects/:id', (req, res) => {
    if (!req.body.projectName){
        res.status(400).json({err: 'you need a name my friend'})
    } else {
        methods.editProject(req.params.id, req.body)
            .then(proj => {
                res.status(200).json(proj)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({err: "something bad happened. Don't tell mom"})
            })
    }
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
        .then(resources => {
            res.status(200).json(resources)
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

server.get('/tasks', (req, res) => {
    methods.getAllTasks()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({err: "something bad happened. Don't tell mom"})
        })
})

server.delete('/tasks/:id', (req,res)=> {
    methods.deleteTask(req.params.id)
        .then(num => {
            if(num > 0){
                res.status(204).end()
            }
            else(
                res.status(404).json({err: 'coulnt find it'})
            )
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({err: "something bad happened. Don't tell mom"})
        })
})

server.put('/tasks/:id', (req, res) => {
    if (!req.body.projectName){
        res.status(400).json({err: 'you need a name my friend'})
    } else {
        methods.editTask(req.params.id, req.body)
            .then(task => {
                res.status(200).json(task)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({err: "something bad happened. Don't tell mom"})
            })
    }
})

module.exports = server;