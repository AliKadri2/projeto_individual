var dashModel = require("../models/dashModel");

function carregarDash(req, res) {
  var idUsuario = req.params.idUsuario;
  dashModel.carregarDash(idUsuario)
      .then( 
          function (resultado) {
              res.json(resultado);
          }
      )
      .catch(
          function (erro) {
              console.log(erro);
              console.log("Houve um erro armazenar os pontos: ", erro.sqlMessage);
              res.status(500).json(erro.sqlMessage);
          }
      );
}

module.exports = {
  carregarDash
};
