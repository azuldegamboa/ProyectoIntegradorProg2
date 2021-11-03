var express = require('express');
var router = express.Router();
const controller = require('../controllers/postController');

router.get('/add', controller.agregarPost);

router.get('/detalle/:id', controller.post);
router.post('/detalle/:id', controller.store);


//router.get('/:id/edit', controller.detalle );



  module.exports=router