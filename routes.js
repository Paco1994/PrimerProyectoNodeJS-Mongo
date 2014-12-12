module.exports = function(app){
  var SerieTV = require ('./serietv');

  // GET
  findAllSeriesTV = function (req, res){
    SerieTV.find (function(err,seriestv) {
      if (!err) res.send(seriestv);
      else console.log('ERROR:' +err);
    });
  };

  // GET
  findByID = function(req, res){
    SerieTV.findById(req.params.id, function(err,serietv){
      if(!err) res.send(serietv);
      else console.log('ERROR:' +err);
    });
  };

  // POST
  addSerieTV = function (req, res) {
    console.log ('POST');
    console.log(req.body);

    var serietv = new SerieTV({
      nombre: req.body.nombre,
      precio: req.body.precio,
      descripcion: req.body.descripcion,
      foto:req.body.foto,
      disponibilidad: req.body.disponibilidad,
      nombreOpinion: req.body.nombreOpinion,
      opinion: req.body.opinion
    });

    serietv.save(function(err){
      if(!err) console.log ('SerieTV Guardada!');
      else console.log('ERROR:' +err);
    });

    res.send(serietv);
  };

   //PUT (Update)
  updateSerieTV = function (req, res){
    SerieTV.findById(req.params.id, function(err, serietv){
      if (serietv)  {
        serietv.nombre = req.body.nombre;
        serietv.precio = req.body.precio;
        serietv.descripcion = req.body.descripcion;
        serietv.foto = req.body.foto;
        serietv.disponibilidad = req.body.disponibilidad;
        serietv.nombreOpinion = req.body.nombreOpinion;
        serietv.opinion = req.body.opinion;
        serietv.save;
        console.log('SerieTV Actualizada!');
      }
        else {
          req.connection.destroy();
          console.log ('ERROR, no existe la serie que quiere actualizar.');
        }
      });
    };

  // DELETE

  deleteSerieTV = function (req, res){
    SerieTV.findById(req.params.id, function(err, serietv){
      if (serietv) {
        serietv.remove;
        console.log ('SerieTV Borrada.');
      }
      else {
        req.connection.destroy();
        console.log ('ERROR, no existe la serie que quiere borrar.');
      }
    });
  }

  //API ROUTES

app.get ('/seriestv', findAllSeriesTV);
app.get ('/seriestv/:id', findByID);
app.post ('/seriestv', addSerieTV);
app.put('/seriestv/:id', updateSerieTV);
app.delete('/seriestv/:id', deleteSerieTV);
}
