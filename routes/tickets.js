var express = require('express');
var app = express();

/* ======================================
            CARD INICIAL
=======================================*/
app.get('/inicial', (req, res) => {

    res.status(200).json({
        ok: true,
        data: {
            title: "Ticket Inicial",
            data1: "Data Ticket 1",
            data2: "Data Ticket 2",
            //backgroundColor: "#4f85a",
            button: { title: "Crear Ticket" }
        }
    });

});

/* ======================================
            CARD ACTUALIZAR
=======================================*/

app.get('/actualizar', (req, res) => {

    res.status(200).json({
        ok: true,
        data: {
            title: "Ticket Act",
            data1: "Data Ticket 1",
            data2: "Data Ticket 2",
            button: {
                title: "Guardar",
            }
        }
    });

});

/* ======================================
            CARD COMPARAR
=======================================*/
app.get('/comparar', (req, res) => {

    res.status(200).json({
        ok: true,
        data: {
            title: "Comparar",
            data1: "Categoría:",
            data2: "Asignado a:",
            button: {
                title: "Continuar",
            }
        }
    });

});

/* ======================================
            CARD CONDICIONES
=======================================*/
app.get('/condiciones', (req, res) => {

    res.status(200).json({
        ok: true,
        data: {
            title: "Condiciones",
            data1: "Sea Igual A:",
            data2: "Contenga:",
            button: {
                title: "Continuar",
            }
        }
    });

});

/* ======================================
            CARD FINAL
=======================================*/
app.get('/final', (req, res) => {

    res.status(200).json({
        ok: true,
        data: {
            title: "Ticket Final",
            data1: "Data Ticket 1",
            data2: "Data Ticket 2",
            button: {
                title: "Guardar",
            }
        }
    });

});

module.exports = app;