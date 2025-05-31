var database = require("../database/config");

function iniciar(acerto, fkUsuario) {

    var instrucaoSql = `INSERT INTO tentativas_quiz (acertos, fkUsuario) VALUES (?, ?)`;

    return database.executarComParametros(instrucaoSql, [acerto, fkUsuario]);

}

function atualizarAcerto(idTentativa, acertos, fkUsuario) {

    var instrucaoSql = `
        UPDATE tentativas_quiz SET acertos = ${acertos} WHERE idTentativa = ${idTentativa} AND fkUsuario = ${fkUsuario};
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    iniciar,
    atualizarAcerto
};
