var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var postsRouter = require('./routes/posts');

var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//uso de las variables
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // dice que todo lo que contenga la carpeta public va a ser visto en el navegador

app.use(  // cambiamos la configuracion
  session({
    secret: 'recitales',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  }),
);

app.use((req, res, next) => {
  if (req.cookies.user != undefined && req.session.user == undefined) {
    // Pone en la sessión lo que está en la cookie SÓLO si la sesión está vacía
    req.session.user = req.cookies.user;
  }
  next();
});

// Middleware de Session
app.use((req, res, next) => {
  if (req.session.user != undefined) {
    // Envia a todas las vistas la variable app.user
    res.locals.usuariolog = req.session.user;
  }else{
    res.locals.usuariolog = null;
    // podemos acceder desde cualquier vista a lo que guardamos como usuariolog
  }
  next();
});

app.use('/', indexRouter); // una sola barra no agrega nada 
app.use('/users', usersRouter); // barra y algo atras me lleva a lo que puse atras de la barra
app.use('/posts', postsRouter); 


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.use(async(req, res, next)=>{
  res.locals.user_id
})

module.exports = app;
