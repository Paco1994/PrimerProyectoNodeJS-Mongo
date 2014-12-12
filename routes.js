module.exports = function(app){
  var ProductoSigmaTienda = require ('./sigmaProducto');

  // GET
  findAllUCOSigmaTienda = function (req, res){
    ProductoSigmaTienda.find (function(err,UCOSigmaTienda) {
      if (!err) res.send(UCOSigmaTienda);
      else {
        console.log('ERROR:' +err);
        req.connection.destroy();
      }
    });
  };

  // GET
  findByID = function(req, res){
    ProductoSigmaTienda.findById(req.params.id, function(err,sigmaProducto){
      if(!err) res.send(sigmaProducto);
      else {
        console.log('ERROR:' +err);
        req.connection.destroy();
      }
    });
  };

  // POST
  addProductoSigmaTienda = function (req, res) {
    console.log ('POST');
    console.log(req.body);

    var sigmaProducto = new ProductoSigmaTienda({
      nombre: req.body.nombre,
      precio: req.body.precio,
      descripcion: req.body.descripcion,
      foto:req.body.foto,
      disponibilidad: req.body.disponibilidad,
      nombreOpinion: req.body.nombreOpinion,
      opinion: req.body.opinion
    });

    sigmaProducto.save(function(err){
      if(!err) console.log ('¡Producto Guardado!');
      else console.log('ERROR:' +err);
    });

    res.send(sigmaProducto);
  };

   //PUT (Update)
  updateProductoSigmaTienda = function (req, res){
    ProductoSigmaTienda.findById(req.params.id, function(err, sigmaProducto){
      if (sigmaProducto)  {
        sigmaProducto.nombre = req.body.nombre;
        sigmaProducto.precio = req.body.precio;
        sigmaProducto.descripcion = req.body.descripcion;
        sigmaProducto.foto = req.body.foto;
        sigmaProducto.disponibilidad = req.body.disponibilidad;
        sigmaProducto.nombreOpinion = req.body.nombreOpinion;
        sigmaProducto.opinion = req.body.opinion;
        sigmaProducto.save;
        console.log('¡Producto actualizado!');
      }
        else {
          req.connection.destroy();
          console.log ('¡ERROR, no existe el producto que quiere actualizar!');
        }
      });
    };

  // DELETE

  deleteProductoSigmaTienda = function (req, res){
    ProductoSigmaTienda.findById(req.params.id, function(err, sigmaProducto){
      if (sigmaProducto) {
        sigmaProducto.remove();
        console.log ('¡Producto borrado!');
      }
      else {
        console.log ('¡ERROR, no existe el producto que quiere borrar!');
      }
    req.connection.destroy();
    });
  }

  //API ROUTES

app.get ('/UCOSigmaTienda', findAllUCOSigmaTienda);
app.get ('/UCOSigmaTienda/:id', findByID);
app.post ('/UCOSigmaTienda', addProductoSigmaTienda);
app.put('/UCOSigmaTienda/:id', updateProductoSigmaTienda);
app.delete('/UCOSigmaTienda/:id', deleteProductoSigmaTienda);
}
