let data= require("../data/comentario")

let controller= {
    index: function(req, res, next) {
        res.render('index', { title: data });
      },
    
    resultadoBusqueda: function(req, res, next) {
      res.render('resultadoBusqueda', { title: 'Express' });
    }

}
module.exports= controller