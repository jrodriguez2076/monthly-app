/*Archivo de node.js, con el que se inicia el servidor*/
const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

//requerir el modulo especificado en la base de datos
const { mongoose } = require('./database');


//settings
app.set('port', process.env.PORT || 3000);

//middleware
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api/month',require('./routes/monthly.routes'));

//static files
app.use(express.static(path.join(__dirname, 'public')))

//Start server
app.listen(app.get('port'), ()=>{
    console.log(`Server listening on ${app.get('port')}`);
});