
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
      },{
        association:"likes",
      }]
     })
     .then(post=>{
       var likeado = false
       if(req.session.user){
          post.likes.forEach(like => {
          if(req.session.user.id==like.usuario_id){
            likeado=true
          }
         });
       }
      res.render('detallePost',{post:post, likeado:likeado});   
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
      },
    storePost: function(req, res) { //req= request res = response
      req.body.imagen = (req.file.destination + req.file.filename).replace('public', '');
      db.post.create({
          descripcion: req.body.descripcion,
          imagen: req.body.imagen,
          usuario_id: res.locals.usuariolog.id

        })
        .then(()=>{
          res.redirect("/")
        })
      },
      delete:function(req,res){
        db.post.destroy({
          where:[
            {id:req.body.id}
          ]
        })
        .then(()=>{
          res.redirect("/")
        })
      },
      edit: function(req, res) { //req= request res = response
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
          res.render('editPost',{post:post});   
         })
        },
      editPost:function(req,res){
        db.post.update({
          descripcion: req.body.descripcion,
          imagen: req.body.imagen
        },{ where:{
          id:req.body.id
        }})
        .then(()=>{
          res.redirect("/")
        })
      },
      
      comentar:function(req,res){
        db.comentario.create({
          comentario:req.body.comment,
          usuario_id:req.session.user.id,
          posteo_id:req.body.id,
        })
        .then(()=>{
          res.redirect("/posts/detalle/"+req.body.id)
        })
      },

        
        
        like: function(req, res) {
          if (!req.session.user) {
            res.redirect('/posts/detalle/'+req.params.id);
          }
          db.like.create({
            usuario_id: req.session.user.id,
            posteo_id: req.params.id 
          }).then(like => {
            res.redirect('/posts/detalle/'+req.params.id);
          }).catch(error => {
            return res.send(error);
          })
        },
        dislike: function(req, res) {
          if (!req.session.user) {
            res.redirect('/posts/detalle/'+req.params.id);
          }
          db.like.destroy(
            { where: { usuario_id: req.session.user.id, posteo_id: req.params.id }
          })
          .then(() => {
            res.redirect('/posts/detalle/'+req.params.id);
          }).catch(error => {
            return res.render(error);
          })
        },

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
