var database = require("../database/config");

// Número de usuários que respondeu o quiz
function numUsuarios() {

    var instrucaoSql = `SELECT COUNT(DISTINCT fkUsuario) AS usuarios FROM tentativas_quiz;`;

    return database.executar(instrucaoSql);
    
}

// Média de acertos dos usuários no quiz
function mediaAcertos() {

    var instrucaoSql = `SELECT ROUND(AVG(acertos),0) AS media_acertos FROM tentativas_quiz;`

    return database.executar(instrucaoSql)

}

// Questão com o maior porcentagem de acertos no quiz
function porcentAcertos() {

    var instrucaoSql = `SELECT fkQuestao AS numQuestao, ROUND(SUM(acertos) / COUNT(*) * 100, 0) AS mais_acertos FROM respostas_quiz GROUP BY fkQuestao ORDER BY mais_acertos DESC LIMIT 1;`

    return database.executar(instrucaoSql)

}

// Questão com o maior porcentagem de erros no quiz
function porcentErros() {

    var instrucaoSql = `SELECT fkQuestao AS numQuestao, ROUND((1 - AVG(acertos)) * 100, 0) AS mais_erros FROM respostas_quiz GROUP BY fkQuestao ORDER BY mais_erros DESC LIMIT 1;`

    return database.executar(instrucaoSql)

}

// Desempenho dos usuários no quiz
function desempenho() {

    var instrucaoSql = `SELECT t.idTentativa, u.username AS user, SUM(t.acertos) AS total_acertos FROM usuario u JOIN tentativas_quiz t ON u.idUsuario = t.fkUsuario GROUP BY t.idTentativa, u.idUsuario ORDER BY t.idTentativa;`

    return database.executar(instrucaoSql)

}

function mediaQuestao() {

    var instrucaoSql = `SELECT fkQuestao AS numQuestao, ROUND(AVG(acertos) * 100, 2) AS media_quest FROM respostas_quiz GROUP BY fkQuestao;`

    return database.executar(instrucaoSql)

}

module.exports = {
    numUsuarios,
    mediaAcertos,
    porcentAcertos,
    porcentErros,
    desempenho,
    mediaQuestao
};
