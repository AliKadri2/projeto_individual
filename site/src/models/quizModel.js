
var database = require("../database/config");

function salvardados(idUsuario,pontuacaousuario) {
  
  var instrucaoSql = `INSERT INTO quiz (pontos, fkusuario) VALUES (${pontuacaousuario}, ${idUsuario});`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  salvardados
}
