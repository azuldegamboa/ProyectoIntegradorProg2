let controller ={
    producto: function(req, res, next) { //req= request res = response
        res.send('esta es la pagina de productos');
      },
    detalle: function(req, res, next) { //req= request res = response
        res.send(req.params.id); //res.send --> envia info req.params --> es un parametro, se guardan ahi
      }
}

module.exports=controller