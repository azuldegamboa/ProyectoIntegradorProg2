const db = require('../database/models');
const op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');
const post = require('../data/post');

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
  if (!req.body.password || req.body.password.length < 3) {
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
  const user = await db.user.findOne({
    where: {
      email: req.body.email
    }
  })
  if (user) {
    errors.push('ESTE EMAIL YA ESTÁ EN USO');
  }
  return errors;

};

let controller = {
  detalleUsuario: function (req, res, next) {
    db.user.findByPk(req.params.id, {
        include: [{
      all: true
        }]
      })
      .then(usuario => {
        res.render('detalleUsuario', {
          user: usuario,
        });
      })

  },
  //detalleUsuario: async function(req,res){
  //const user = await db.user.findByPk(req.params.nombre);
  //const posts = await db.post.findAll({where:{usuario_id:req.params.nombre}});
  //res.render('detalleUsuario',{user, posts, comentarios: comentario.lista});
  //}
  //},
  editarPerfil: function (req, res, next) { //req= request res = response
    res.render('editarPerfil');
  },
  login: function (req, res, next) { //req= request res = response
    res.render('login', {
      error: null
    });
  },
  logout: function (req, res, next) {
    res.clearCookie('user');
    req.session.user = null;
    res.redirect('/');
  },
  loginpost: function (req, res, next) { //req= request res = response
    if (!req.body.email) {
      res.render('login', {
        error: 'EL EMAIL ES REQUERIDO'
      })
    }
    if (!req.body.password || req.body.password.length < 3) {
      res.render('login', {
        error: 'LA CONTRASEÑA DEBE TENER AL MENOS 3 CARACTERES'
      })
    }
    db.user.findOne({
        where: {
          email: req.body.email
        }
      })
      .then(user => {
        if (user) {

          console.log(user)
          if (bcrypt.compareSync(req.body.password, user.password)) {
            req.session.user = user
            if (req.body.remember) {
              res.cookie('user', user, {
                maxAge: 60 * 60 * 24 * 30 * 1000
              })
            }
            res.redirect('/')

          } else {
            res.render('login', {
              error: 'LA CONTRASEÑA INGRESADA ES INCORRECTA'
            })
          }
        } else {
          res.render('login', {
            error: 'EL EMAIL INGRESADO ES INCORRECTO'
          })
        }
      })

  },
  miPerfil: function (req, res, next) { //req= request res = response
    res.render('miPerfil', {
      user: users.lista[0],
      posts: post.lista,
      comentarios: comentario.lista
    })
  },
  registracion: function (req, res, next) { //req= request res = response
    res.render('registracion');
  },
  create: function (req, res, next) { //req= request res = response
    const errors = validateUser(req);
    if (errors.length > 0) {
      return res.render('register', {
        errors
      });
    }
    req.body.imagen = (req.file.destination + req.file.filename).replace('public', '');
    req.body.password = bcrypt.hashSync(req.body.password, 10); //encriptar la contraseña para que sean numeros/letras
    db.user.create(req.body)
      .then(post => {
        res.redirect('/users/login');
      }).catch(error => {
        return res.render(error);
      })
  },


  resultadoBusquedaUser: function (req, res, next) {
    db.user.findAll({
        include: [{
          association: "posteos"
        }],
        where: {
          [op.or]: [{
              nombre: {
                [op.like]: "%" + req.query.search + "%"
              }
            },
            {
              email: {
                [op.like]: "%" + req.query.search + "%" //something like ,req.query. search (cuando busques algo va a estar guardado aca) formulario get. que no te importen las mayusculas y minusculas
              }
            }
          ]
        },
     

      })
      .then(results => {
        res.render('resultadoBusquedaUser', {
          resultado: results
        }); // la palabra de la izquierda es para identificarlo en las vistas 
      })

  },
  follow: function(req, res) {
    if (!req.session.user) {
      res.redirect('/users/details/'+req.params.id);
    }
    db.follow.create({
      follower_id: req.session.user.id,
      following_id: req.params.id 
    }).then(follow => {
      res.redirect('/users/details/'+req.params.id);
    }).catch(error => {
      return res.send(error);
    })
  },
  unfollow: function(req, res) {
    if (!req.session.user) {
      res.redirect('/users/details/'+req.params.id);
    }
    db.follow.destroy(
      { where: { follower_id: req.session.user.id, following_id: req.params.id }
    })
    .then(() => {
      res.redirect('/users/details/'+req.params.id);
    }).catch(error => {
      return res.render(error);
    })
  },
}



module.exports = controller