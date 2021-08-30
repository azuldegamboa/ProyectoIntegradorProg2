let controller ={
    producto: function(req, res, next) { //req= request res = response
        res.send('esta es la pagina de productos');
      },
    detalle: function(req, res, next) { //req= request res = response
        res.send(req.params.id);
      }
}

module.exports=controller