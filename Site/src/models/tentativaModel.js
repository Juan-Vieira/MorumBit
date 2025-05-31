var database = require("../database/config");

function iniciar(acerto, fkUsuario) {

    var instrucaoSql = `INSERT INTO tentativas_quiz (acertos, fkUsuario) VALUES (?, ?)`;

    return database.executarComParametros(instrucaoSql, [acerto, fkUsuario]);
    
}

module.exports = {
    iniciar
};
