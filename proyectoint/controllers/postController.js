let comentario= require("../data/comentario")
let users= require("../data/user")
let post= require("../data/post")

let controller ={
    post: function(req, res, next) { //req= request res = response
      for (let i = 0; i < post.lista.length; i++) {
        const element = post.lista[i];
        if (element.id==req.params.id) {//el id de esta publicacion es igual al id del parametro que esta en el link, si alguuno de los elemento dentro de la lista de post tiene el mismo id que el que yo busque en la ruta que me lo traiga
          res.render('detallePost',{post:element, users: users.lista, comentarios: comentario.lista});
     
        }
      }
        
    },
    agregarPost: function(req, res, next) { //req= request res = response
        res.render('agregarPost'); //res.send --> envia info req.params --> es un parametro, se guardan ahi
      }
}

module.exports=controller;

//const db = require('../database/models');
//let controller ={
  //post: function(req, res, next) { //req= request res = response
   // const post= await db.post.findByPk(req.params.id)
    //if (!post){
      //return res.render('error');
    //}
    //const comentarios= await db.post.findAll({where: {post_id:req.params.id}})
