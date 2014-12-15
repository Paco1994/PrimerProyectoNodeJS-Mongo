var mongoose = require ('mongoose'),
    Schema = mongoose.Schema;

var sigmaProducto = new Schema({
    nombre: String,
    precio: Number,
    descripcion: String,
    foto: String,
    disponibilidad: String,
    nombreOpinion: String,
    opinion: String,
    Valoracion: Number
});

module.exports = mongoose.model ('ProductoSigmaTienda', sigmaProducto)
