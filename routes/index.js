var express = require('express');
var router = express.Router();
var reclamoController = require('../controllers/reclamoController');

var reclamo = {tipoReclamo:'odeco',
				observacion:'Mal servicio',
				fecha:'26/11/2016'}
/* GET home page. */
router.get('/',reclamoController.principal); 
router.get('/registroReclamo', reclamoController.registroReclamo); 
router.get('/guardarReclamo', reclamoController.guardarReclamo);


module.exports = router;
