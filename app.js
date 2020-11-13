'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/pruebas', (req, res)=>{
 res.status(200).send({message: 'Bienvenido al curso mean'});
});

module.exports= app;