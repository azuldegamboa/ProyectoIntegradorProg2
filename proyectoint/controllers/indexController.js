  
const db = require("../database/models");
const op = db.Sequelize.Op;

let controller= {
    index:  function(req, res, next) {
     db.post.findAll({
        include:[{
          association:"user"
        },{
          association:"comentarios",
          include:{
            association:"user"
          }
        }],
        order:[['created_at','DESC']]
      }) //busca todos los posteos, me va a traer el mas nnuevo priemro de manera descenciente 
      .then(posts=>{
        res.render('index', { posts});
      })
      },
    
    resultadoBusqueda: function(req, res, next) {
      db.post.findAll({
        include:[{
          association:"user"
        }],
        where:{
          descripcion: {
            [op.like]:"%"+req.query.search+"%" //something like ,req.query. search (cuando busques algo va a estar guardado aca) formulario get. que no te importen las mayusculas y minusculas
          }// las comillas y el porcentaje hacen que no tenga que buscarlo tal cual para encontrarlo 
        },
        order:[['created_at','DESC']], // ordenar los posteos de manera descendente
        limit: 10 //limite de 10 posteos 
        
      })
      .then(results=>{
        res.render('resultadoBusqueda', { resultado: results }); // la palabra de la izquierda es para identificarlo en las vistas 
      })
  
    }


}
module.exports= controller