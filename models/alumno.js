'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
	name: String,
	f_surname: String,
	s_surname: String,
	curp: String,
	account_key: String,
	civil_status: String,
	nacionality: String,
	birth_state: String,
	gender: String,
	birth_date: String,
	lang_m: String,
	type_doc_id: String,
	folio_doc: String,
	email: String,
	password: String,
	role: String,
	image: String,
	street: String,
	between_street_1: String,
	between_street_2: String,
	number_home: String,
	apple: String,
	lote: Number,
	number_int: String,
	department: String,
	other_reference: String,
	cp: String,
	colony : String,
	federal_entity: String,
	municipality: String,
	location: String,
	active:Boolean

	
});

module.exports = mongoose.model('Alumno', UserSchema);
	