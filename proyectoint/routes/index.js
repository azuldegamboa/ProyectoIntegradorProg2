var express = require('express');
var router = express.Router();
var controller= require('../controllers/indexController') 
// aca estoy requiriendo el controlador para despues usar sus metodos

/* GET home page. */
router.get('/', controller.index);

router.get('/search', controller.resultadoBusqueda);

module.exports = router;
