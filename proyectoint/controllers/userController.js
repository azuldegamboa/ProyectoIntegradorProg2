
const db = require('../database/models');
const op = db.Sequelize.Op;
const bcrypt = require('bcryptjs')

const validateUser = async function (req) {
  const errors = [];
  
  if (!req.body.apellido) {
    errors.push('EL APELLIDO ES REQUERIDO');
  }
  if (!req.body.nombre) {
    errors.push('EL NOMBRE ES REQUERIDO');
  }
  if (!req.body.email) {
    errors.push('EL EMAIL ES REQUERIDO');
  }
  if (!req.body.password || req.body.password.length <3) {
    errors.push('LA CONTRASEÑA DEBE TENER AL MENOS 3 CARACTERES');
  }
  if (!req.body.fecha_de_nacimiento) {
    errors.push('LA FECHA DE NACIMIENTO ES REQUERIDA');
  }
  if (!req.body.edad) {
    errors.push('LA EDAD ES REQUERIDA');
  }
  if (!req.file) {
    errors.push('LA IMAGEN ES REQUERIDA');
  }
  const user = await db.user.findOne({where: {email: req.body.email}})
    if(user)
    {
      errors.push('ESTE EMAIL YA ESTÁ EN USO');
    }
    return errors;

};

let controller={
    detalleUsuario: function(req, res, next) {
        for (let i = 0; i < users.lista.length; i++) {
          const element = users.lista[i];
        if (element.id==req.params.id) {//el id de esta publicacion es igual al id del parametro que esta en el link, si alguuno de los elemento dentro de la lista de post tiene el mismo id que el que yo busque en la ruta que me lo traiga
          res.render('detalleUsuario',{user:element, posts: post.lista, comentarios: comentario.lista});
        }
      }
    },
    //detalleUsuario: async function(req,res){
      //const user = await db.user.findByPk(req.params.nombre);
      //const posts = await db.post.findAll({where:{usuario_id:req.params.nombre}});
      //res.render('detalleUsuario',{user, posts, comentarios: comentario.lista});
    //}
    //},
    editarPerfil: function(req, res, next) { //req= request res = response
        res.render('editarPerfil');
      },
    login: function(req, res, next) { //req= request res = response
        res.render('login');
      },
    miPerfil: function(req, res, next) { //req= request res = response
          res.render('miPerfil',{user:users.lista[0], posts: post.lista, comentarios: comentario.lista})
      },
    registracion: function(req, res, next) { //req= request res = response
        res.render('registracion');
      },
    create: function(req, res, next) { //req= request res = response
      const errors = validateUser(req);
      if (errors.length > 0) {
        return res.render('register', { errors });
      }
    req.body.imagen= (req.file.destination+req.file.filename).replace('public', '');
      req.body.password = bcrypt.hashSync(req.body.password, 10); //encriptar la contraseña para que sean numeros/letras
      db.user.create(req.body)
        .then(post => {
          res.redirect('/users/login');
        }).catch(error => {
          return res.render(error);
        })
    },
  
}

module.exports=controller