'use strict'
var bcrypt =require ('bcrypt-nodejs');
var mongoosePaginate = require('mongoose-pagination');
var fs = require('fs');
var path = require('path');
var Alumno = require('../models/alumno');
var jwt = require('../services/jwt');
//MEtodo de prueba home
function pruebaAlumno(req,res) {
 	res.status(200).send({
 		message: "pruebaAlumno"
 	});

 }

function saveAlumno(req,res){
	var params = req.body;
	var alumno = new Alumno();
	//si existen los datos 
	if( params.name && 
		params.f_surname  && 
		params.s_surname  && 
		params.curp  && 
		params.civil_status  && 
		params.nacionality && 
		params.birth_state  && 
		params.gender  && 
		params.birth_date  && 
		params.lang_m  && 
		params.type_doc_id  && 
		params.folio_doc  && 
		params.email  && 
		params.password  && 
		params.street &&
		params.cp &&
		params.colony &&
		params.federal_entity &&
		params.municipality 

		  

		) {
		//seteamos variables
		user.name = params.name;
		user.f_surname = params.f_surname;
		user.s_surname = params.s_surname;
		user.curp = params.curp;
		user.civil_status = params.civil_status;
		user.nacionality = params.nacionality;
		user.birth_state = params.birth_state;
		user.gender = params.gender;
		user.birth_date = params.birth_date;
		user.lang_m = params.lang_m;
		user.type_doc_id = params.type_doc_id;
		user.folio_doc = params.folio_doc;
		user.email = params.email;
		user.role = params.role;
		user.image = null;

		User.find({ $or:[
			{email:user.email.toLowerCase()},
			{curp:user.curp.toLowerCase()}
			]}).exec((err,alumns) => {
				if(err) return res.status(500).send({message:'Error en la peticion de Alumnos'});



				if(alumns && alumns.length >= 1 ) {
					return res.status(200).send({message:'El Alumno que intentas registrar ya existe!! '});
				}else {
						bcrypt.hash(params.password,null,null,(err,hash) => {
							user.password = hash;

							user.save((err,userStored) => {
								if (err) return res.status(500).send({message:'Error al guardar el usuario'});
								if(userStored){
									res.status(200).send({user: userStored});
								}else {
									res.status(404).send({message: 'No se ha registrado el usuario'});
								}
							});
						});

				}

			});

						
		
		

	} else {
		res.status(200).send({
			message:'Envia todos los campos necesarios !!'
		});
	}
 }








module.exports = {
 	pruebaAlumno,
 	saveAlumno
 }
