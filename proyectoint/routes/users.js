var express = require('express');
var router = express.Router();
const controller = require('../controllers/userController');
const multer = require('multer');
const upload = multer({dest: 'public/images/users/'});

/* GET users listing. */

router.get('/details/:id', controller.detalleUsuario);

router.get('/edit', controller.editarPerfil);

router.get('/login', controller.login);

router.get('/logout', controller.logout);

router.get('/register', controller.registracion);

router.post('/register', upload.single('imagen'), controller.create);

router.post('/login', controller.loginpost);

module.exports = router;
