use strict'

//var path = require('path');
//var fs = require('fs');
var mongoosePaginate = require('mongoose-pagination');

var User = require('../models/user');
var Follow = require('../models/follow.js');


function prueba (req,res) {
	res.status(200).send({message:'mensage de funcion prueba'});
}


module.exports = {
	prueba
}


function saveFollow (req,res) {
	var params = req.body;
	var follow = new Follow();
	follow.user = req.user.sub;
	follow.followed = params.followed;


	follow.save((err,followStored) =>{

		if (err) return res.status(500).send({message:'Error al guardar el eguimiento'});
		if (!followStored) return res.status(404).send({message:'El seguimiento no se ha guardado'});

		return res.status(200).send({follow:followStored});
	});

}

function deleteFollow (req,res) {
	var userId = req.user.sub;
	var followId = req.params.id;
	

	console.log(userId);
	console.log(followId);
	Follow.find({'user':userId,'followed':followId}).remove(err => {
		if (err) return res.status(500).send({message:'Error al dejar de seguir'});
		return res.status(200).send({message:'El follow se ha eliminado'});

	});

}


module.exports = {
	prueba,
	saveFollow,
	deleteFollow
}