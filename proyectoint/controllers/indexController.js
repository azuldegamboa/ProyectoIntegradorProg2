let comentario = require("../data/comentario"); //requiriendo un modulo

let post = require("../data/post");

let users = require('../data/user');

let controller= {
    index: function(req, res, next) {
        res.render('index', { posts: post.lista, users: users.lista, comments:comentario.lista });
      },
    
    resultadoBusqueda: function(req, res, next) {
      let resultado =[]
      for (let i = 0; i < post.lista.length; i++) { //este for recorre todda la lista de post y recorre elemento por elemento si dentro de la descripcion lo que la persona escribio
        const element = post.lista[i];
        if(element.descripcion.toLowerCase().includes(req.query.search.toLowerCase())){ //si existe el elemento con una descripcion que contrenga lp que la persona escribio, se guarda dentro de la lista de resultados a traves de push
          resultado.push(element) 
        }
      }
      res.render('resultadoBusqueda', { resultado: resultado }); // la palabra de la izquierda es para identificarlo en las vistas
    }


}
module.exports= controller