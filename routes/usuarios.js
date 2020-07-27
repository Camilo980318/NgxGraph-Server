var express = require('express');
var app = express();

/* ======================================
            DATA USUARIOS
=======================================*/

app.get('/', (req, res) => {

    res.status(200).json({
        ok: true,
        usuarios: [
            { nombre: "Camilo Andrade" },
            { nombre: "María Clavijo" },
            { nombre: "Nicolás Rojas" },
            { nombre: "Juan Ramírez" },
            { nombre: "Luisa Alarcón" }
        ]
    });

});

module.exports = app;