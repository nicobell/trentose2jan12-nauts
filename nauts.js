
const express = require('express'),
    bodyParser = require('body-parser');
const assignments = express.Router()

var uuid = require('uuid-v4');

const spacenauts = []

nauts.get('/', function (req, res) {
    res.json(spacenauts)
})

nauts.post('/', function (req, res) {
    const newNaut = req.body
    newNaut.id = uuid()
    spacenauts.push(newNaut)
    res.json(spacenauts)
})

nauts.get('/:nautid', function (req, res) {
    const nautid = req.params.nautid
    const i = spacenauts.findIndex(item => {return item.nautid === nautid})
    if (i==-1) res.sendStatus(404)
    else {
        res.status=200
        res.json(spacenauts[i])
    }
})

assignments.put('/:nautid', function (req, res) {
    const assignmentID = req.params.assignmentID
    const i = deliveredAssignments.findIndex(item => {return item.assignmentID === assignmentID})
    deliveredAssignments[i] = req.body
    deliveredAssignments[i].assignmentID = assignmentID
    deliveredAssignments[i].dateUpdated = new Date()
    res.json(deliveredAssignments[i])
})

assignments.delete('/:assignmentID', function (req, res) {
    const assignmentID = req.params.assignmentID
    if (!assignmentID) res.sendStatus(404)
    const i = deliveredAssignments.findIndex(item => {return item.assignmentID === assignmentID})
    const deleted = deliveredAssignments[i]
    deliveredAssignments.splice(i,1)
    res.sendStatus(204)
})

module.exports = nauts