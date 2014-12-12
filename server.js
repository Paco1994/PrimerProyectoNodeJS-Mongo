//Requerimientos

/*Importamos las dependencias que hemos descargado con npm install*/
var express = require("express"),
app = express(),  // para poder utilizar los métodos y funciones de Express y poder usar su framework fácilmente
bodyParser  = require("body-parser"),
methodOverride = require("method-override");
mongoose = require('mongoose');

mongoose.connect ('mongodb://localhost/UCOSigmaTienda', function(err, rest){
  if(err) console.log('ERROR: Conectando a la BD: ' + err);
  else console.log('Conexión a la BD realizada.');
});


/*Configurar el servidor*/
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());


app.get('/', function(req, res){
  res.send('Se conecta correctamente a localhost en puerto 500 ;)');
});

require('./routes')(app);

app.listen (5000);
console.log('Servidor Express escuchando en el puerto 5000');
