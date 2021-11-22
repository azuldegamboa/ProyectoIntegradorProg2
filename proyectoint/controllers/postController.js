
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

    agregarPost: function(req, res, next) {//req= request res = response
      if(!req.session.user){
        res.redirect("/")
      }
        res.render('agregarPost',{error:null}); //res.send --> envia info req.params --> es un parametro, se guardan ahi
      },
    storePost: function(req, res) { //req= request res = response
      if(!req.body.descripcion||!req.file){
        res.render("agregarPost",{error:"No puede haber campos vacios"})

      }
      req.body.imagen = (req.file.destination + req.file.filename).replace('public', '');
      db.post.create({
          descripcion: req.body.descripcion,
          imagen: req.body.imagen,
          usuario_id: req.session.user.id
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
           if(!req.session.user||req.session.user.id!=post.user.id){
             res.redirect("/")
           }
          res.render('editPost',{post:post,error:null});   
         })
        },
      editPost:function(req,res){
        db.post.findByPk(req.params.id)
        .then(post=>{
          if(!req.body.descripcion){
            res.render('editPost',{post:post,error:"La descripcion no puede estar vacia"}); 
          }
          if(req.file){
           req.body.imagen = (req.file.destination + req.file.filename+".jpeg").replace('public', ''); 
           db.post.update(req.body, { where: { id: req.params.id }}).then(post => {
             res.redirect('/');
           }).catch(error => {
             return res.render(error);
           })
          }else{
           db.post.update({descripcion:req.body.descripcion}, { where: { id: req.params.id }}).then(post => {
             res.redirect('/');
           }).catch(error => {
             return res.render(error);
           })
          }
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


