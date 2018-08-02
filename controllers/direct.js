'use strict'
var bcrypt =require ('bcrypt-nodejs');
var mongoosePaginate = require('mongoose-pagination');
var fs = require('fs');
var path = require('path');
var User = require('../models/direct');
var jwt = require('../services/jwt');



var jwt = require('../services/jwt');
//MEtodo de ppruebaDirect
function pruebaDirect(req,res) {
 	res.status(200).send({
 		message: "prueba de direct"
 	});

 }






 module.exports = {
 	pruebaDirect
 }
