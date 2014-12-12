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
      serietv.titulo = req.body.titulo;
      serietv.temporadas = req.body.temporadas;
      serietv.pais = req.body.pais;
      serietv.genero = req.body.genero;
      serietv.save(function(err){
        if(!err) console.log('SerieTV Actualizada!');
        else console.log ('ERROR:' +err);
      });
    })
  };

  // DELETE

  deleteSerieTV = function (req, res){
    SerieTV.findById(req.params.id, function(err, serietv){
      serietv.remove(function(err){
        if (!err) console.log('SerieTV Borrada');
        else console.log ('ERROR:' +err);
      })
    });
  }

//API ROUTES

app.get ('/seriestv', findAllSeriesTV);
app.get ('/seriestv/:id', findByID);
app.post ('/seriestv', addSerieTV);
app.put('/seriestv/:id', updateSerieTV);
app.delete('/seriestv/:id', deleteSerieTV);
}
