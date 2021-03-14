import React from 'react'

const express = require('express')
const WorkerController = require('../Controllers/WorkerController')

const routes = express.Router();

routes.post('/section', WorkerController.store);

module.exports = routes;