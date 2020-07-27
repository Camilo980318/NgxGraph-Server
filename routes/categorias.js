var express = require('express');
var app = express();

/* ======================================
            DATA CATEGORÍAS
=======================================*/

app.get('/', (req, res) => {

    res.status(200).json({
        ok: true,
        categorias: [
            { nombre: "Check-in" },
            { nombre: "Check-out" },
            { nombre: "Limpieza" }
        ]
    });

});

module.exports = app;