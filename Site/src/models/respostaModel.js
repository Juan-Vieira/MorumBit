var database = require("../database/config");

function questao(numeroQuest) {

    var instrucaoSql = `INSERT INTO questoes_quiz (numero) VALUES (?)`;

    return database.executar(instrucaoSql, [numeroQuest]);
    
}

function registrarResposta(fkTentativa, fkQuestao, acertoQuestao) {

    var instrucaoSql = `
        INSERT INTO respostas_quiz (fkTentativa, fkQuestao, acertos) VALUES (?, ?, ?)
    `;

    return database.executar(instrucaoSql, [fkTentativa, fkQuestao, acertoQuestao]);
}

module.exports = {
    questao,
    registrarResposta
};
