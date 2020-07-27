var express = require('express');
var app = express();


//==========================================================================
//                         MIDDLEWARE CORS
//==========================================================================

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
    next();
});

//==========================================================================
//                      DEFINICIÓN DE RUTAS
//==========================================================================
var mainRoute = require('./routes/main');
var ticketsRoute = require('./routes/tickets');
var usuariosRoute = require('./routes/usuarios');
var categoriasRoute = require('./routes/categorias');


//==========================================================================
//                             USO DE RUTAS
//==========================================================================
app.use('/categorias', categoriasRoute);
app.use('/usuarios', usuariosRoute);
app.use('/tickets', ticketsRoute);
app.use('/', mainRoute);


//==========================================================================
//                      DEFINICIÓN DEL PUERTO
//==========================================================================
app.listen(3000, () => {
    console.log('Corriendo en el puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});