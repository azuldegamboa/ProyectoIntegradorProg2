var express = require('express'); // nos traemos express (lo requerimos)
var router = express.Router(); // guardamos la ejecucion del metodo que nos provee una variable nueva
var controller= require('../controllers/indexController') 
// aca estoy requiriendo el controlador para despues usar sus metodos

/* GET home page. */
router.get('/', controller.index);

router.get('/search', controller.resultadoBusqueda);

module.exports = router;
