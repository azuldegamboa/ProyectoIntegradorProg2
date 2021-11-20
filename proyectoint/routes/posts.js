var express = require('express');
var router = express.Router();
const controller = require('../controllers/postController');
const multer = require('multer');
const upload = multer({dest: 'public/images/posts/'});

router.get('/add', controller.agregarPost);
router.post('/add',upload.single("imagen"),controller.storePost);
router.get('/detalle/:id', controller.post);
router.get('/edit/:id', controller.edit);
router.post('/edit/:id', upload.single("imagen"), controller.editPost);
router.post('/detalle/:id', controller.store);
router.post('/delete', controller.delete);






  module.exports=router