'use strict'

var express = require('express');
var FollowController = require ('../controllers/follow.js');
var api = express.Router();

var md_auth = require('../middlewares/authenticated');

api.get('/pruebas-follow',md_auth.ensureAuth,FollowController.prueba);
api.post('/follow',md_auth.ensureAuth,FollowController.saveFollow);
api.delete('/follow/id',md_auth.ensureAuth,FollowController.deleteFollow);

module.exports = api;