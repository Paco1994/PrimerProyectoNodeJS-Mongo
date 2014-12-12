var mongoose = require ('mongoose'),
    Schema = mongoose.Schema;

var serietv = new Schema({
    nombre: String,
    precio: Number,
    descripcion: String,
    foto: String,
    disponibilidad: String,
    nombreOpinion: String,
    opinion: String
});

module.exports = mongoose.model ('SerieTV', serietv)
