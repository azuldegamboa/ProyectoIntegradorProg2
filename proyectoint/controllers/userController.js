
const db = require('/database/models');

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
}

module.exports=controller