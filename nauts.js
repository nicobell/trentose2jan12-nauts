
const express = require('express'),
    bodyParser = require('body-parser');
const nauts = express.Router()

var uuid = require('uuid-v4');

const spacenauts = []

nauts.get('/', function(req, res) {
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

nauts.put('/:nautid', function (req, res) {
    const nautid = req.params.nautid
    const i = spacenauts.findIndex(item => {return item.nautid === nautid})
    spacenauts[i] = req.body
    spacenauts[i].nautid = nautid
    res.json(spacenauts[i])
})

module.exports = nauts