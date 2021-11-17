let comentario= require("../data/comentario")
let users= require("../data/user")
let post= require("../data/post")
const db = require("../database/models")

let controller ={
    post: function(req, res, next) { //req= request res = response
     db.post.findByPk(req.params.id,{
      include:[{
        association:"user"
      },{
        association:"comentarios",
        include:{
          association:"user"
        }
      }]
     })
     .then(post=>{
      res.render('detallePost',{post:element, users: users.lista, comentarios: comentario.lista});   
     })
       
    },
store: function(req,res){
  console.log(req.body )
  //Guardar en la base de datos  
  req.content //contenido del post 
  res.render('posts/publish')
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
