var database = require("../database/config");

function carregarDash(idUsuario) {
  var instrucaoSql = `select pontos, idquiz from quiz where fkusuario = ${idUsuario};`
  return database.executar(instrucaoSql)

}

module.exports = {carregarDash};
