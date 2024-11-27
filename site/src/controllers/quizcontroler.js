var quizModel = require("../models/quizModel");



function salvardados(req, res) {
  var idUsuario = req.body.idusuario;
  var pontuacaousuario = req.body.pontuacaousuario;
  quizModel.salvardados(idUsuario, pontuacaousuario)
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
  salvardados
}