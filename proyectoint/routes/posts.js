var express = require('express');
var router = express.Router();
const controller = require('../controllers/postController');

router.get('/', controller.post);

router.get('/detalle/:id', controller.agregarPost);




  module.exports=router