const express = require('express')
const multer = require('multer')
const WorkerController = require('./Controllers/WorkerController')
const AdminsController = require('./Controllers/AdminsController')
const uploadConfig = require('./config/upload')

const TimesController = require('./Controllers/TimesController')

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/workers', WorkerController.index);
routes.get('/worker/:id', WorkerController.show);
routes.put('/worker/edit/:id', WorkerController.put);
routes.post('/post',upload.single('image'), WorkerController.store);


routes.get('/admins', AdminsController.indexAll);
routes.post('/login', AdminsController.login);
routes.get('/admin/:id', AdminsController.show);
routes.put('admin/edit/:id', AdminsController.put);
routes.post('/admin/post',upload.single('image'), AdminsController.store);

routes.post('/worker/:worker_id/registrer',TimesController.store)
module.exports = routes; 