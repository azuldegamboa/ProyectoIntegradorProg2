let controller={
    detalleUsuario: function(req, res, next) { //req= request res = response
        res.render('detalleUsuario');
      },
    editarPerfil: function(req, res, next) { //req= request res = response
        res.render('editarPerfil');
      },
    login: function(req, res, next) { //req= request res = response
        res.render('login');
      },
    miPerfil: function(req, res, next) { //req= request res = response
        res.render('miPerfil');
      },
    registracion: function(req, res, next) { //req= request res = response
        res.render('registracion');
      },
}

module.exports=controller