const express = require('express')
const multer = require('multer')
const WorkerController = require('./Controllers/WorkerController')
const uploadConfig = require('./config/upload')

const TimesController = require('./Controllers/TimesController')

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/workers', WorkerController.index);
routes.get('/worker/:id', WorkerController.show);
routes.post('/post',upload.single('image'), WorkerController.store);
routes.put('/edit/:id', WorkerController.put)

routes.post('/worker/:worker_id/registrer',TimesController.store)
module.exports = routes; 