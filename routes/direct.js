'use strict'
var  express =require ('express');
var UserController = require('../controllers/direct');

var api = express.Router();

var md_auth = require('../middlewares/authenticated');

var multipart = require('connect-multiparty');


api.get('/prueba-direct',UserController.pruebaDirect);





module.exports = api;
