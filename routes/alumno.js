'use strict'
var  express =require ('express');
var UserController = require('../controllers/alumno');

var api = express.Router();

var md_auth = require('../middlewares/authenticated');

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir:'./uploads/alumnos'});

api.get('/prueba-alumno',UserController.pruebaAlumno);

api.post('/registrar-alumno',UserController.saveAlumno);



module.exports = api;
