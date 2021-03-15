const express = require('express')
const multer = require('multer')
const WorkerController = require('./Controllers/WorkerController')
const uploadConfig = require('./config/upload')

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/Cards', WorkerController.index)
routes.post('/Post',upload.single('image'), WorkerController.store);

module.exports = routes; 