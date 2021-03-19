const express = require('express')
const multer = require('multer')
const WorkerController = require('./Controllers/WorkerController')
const uploadConfig = require('./config/upload')

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/Workers', WorkerController.index);
routes.get('/Worker/:id', WorkerController.show);
routes.post('/Post',upload.single('image'), WorkerController.store);
routes.put('/Edit/:id', WorkerController.put)
module.exports = routes; 