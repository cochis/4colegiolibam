'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DirectSchema = Schema({
	street: String,
	between_street_1: String,
	between_street_2: String,
	number_home:String,
	apple: String,
	lote: Number,
	number_int: String,
	department:String,
	other_reference:String,
	cp : Number,
	colony :String,
	federal_entity:String,
	municipality:String,
	location: String,
	user :{ type: Schema.ObjectId , ref:'User'}

	
});

module.exports = mongoose.model('Direct', DirectSchema);