let controller ={
    post: function(req, res, next) { //req= request res = response
        res.render('detallePost');
      },
    agregarPost: function(req, res, next) { //req= request res = response
        res.render('agregarPost'); //res.send --> envia info req.params --> es un parametro, se guardan ahi
      }
}

module.exports=controller