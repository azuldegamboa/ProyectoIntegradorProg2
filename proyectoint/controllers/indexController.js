
const db = require("../database/models");
const op = db.Sequelize.Op;

let controller= {
    index: function(req, res, next) {
      db.post.findAll({order:[['id','DESC']]}) //busca todos los posteos, me va a traer el orden inverso al que viene por defecto 
        .then((posts) =>{     //aca arranca la promesa, tengo todos los posteos
          res.render('index', { posts});
        })
        .catch((error)=> {     //nos sirve para manejar el error y mostrarlo para elegir que hacer
         res.send(error)
      })                      //termina la promesa, nos puede traer error, por eso usamos el catch
      },
    
    resultadoBusqueda: function(req, res, next) {
      let resultado =[]
      for (let i = 0; i < post.lista.length; i++) { //este for recorre todda la lista de post y recorre elemento por elemento si dentro de la descripcion lo que la persona escribio
        const element = post.lista[i];
        if(element.descripcion.toLowerCase().includes(req.query.search.toLowerCase())){ //si existe el elemento con una descripcion que contrenga lp que la persona escribio, se guarda dentro de la lista de resultados a traves de push
          resultado.push(element) 
        }
      }
      //const post = await db.Post.findAll({ where: {
      //  [op.or]:[
      //    {descripcion: {[op.like]: "%"+resultado+"%"}},
      //    {imagen: {[op.like]: "%"+resultado+"%"}},
      //]
      //}}
      //)      resultado es el criterio de busqueda?
     
      res.render('resultadoBusqueda', { resultado: resultado }); // la palabra de la izquierda es para identificarlo en las vistas
    }


}
module.exports= controller