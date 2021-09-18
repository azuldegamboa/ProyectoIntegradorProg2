var express = require('express');
var router = express.Router();
const controller = require('../controllers/postController');

router.get('/add', controller.agregarPost);

router.get('/detalle/:id', controller.post);



  module.exports=router