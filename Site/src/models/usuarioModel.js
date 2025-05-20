var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(username, dtNasc, email, senha) {

    var instrucaoSql = `
        INSERT INTO usuario (username, dtNascimento, email, senha) VALUES ('${username}', '${dtNasc}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function autenticar(email, senha) {
    
    var instrucaoSql = `
        SELECT username, dtNascimento, email, senha FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    autenticar
};