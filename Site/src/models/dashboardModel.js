var database = require("../database/config");

function numUsuarios() {

    var instrucaoSql = `SELECT COUNT(DISTINCT fkUsuario) AS usuarios FROM tentativas_quiz;`;

    return database.executar(instrucaoSql);
    
}

function mediaAcertos() {

    var instrucaoSql = `SELECT ROUND(AVG(acertos),0) AS media_acertos FROM tentativas_quiz;`

    return database.executar(instrucaoSql)

}

module.exports = {
    numUsuarios,
    mediaAcertos
};
