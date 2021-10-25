var express = require('express');
var router = express.Router();
const controller = require('../controllers/userController');

/* GET users listing. */

router.get('/details/:id', controller.detalleUsuario);

router.get('/edit', controller.editarPerfil);

router.get('/login1', controller.login);

router.get('/profile', controller.miPerfil);

router.get('/register', controller.registracion);


module.exports = router;
