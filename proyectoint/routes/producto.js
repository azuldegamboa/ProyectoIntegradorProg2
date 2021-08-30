var express = require('express');
const controller = require('../controllers/productoController');
var router = express.Router();

router.get('/', controller.producto);

router.get('/detalle/:id', controller.detalle);


  module.exports=router