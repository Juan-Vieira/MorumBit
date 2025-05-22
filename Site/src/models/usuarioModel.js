var database = require("../database/config")

function cadastrar(username, dtNascimento, email, senha) {

    var instrucaoSql = `
        INSERT INTO usuario (idUsuario, username, dtNascimento, email, senha) VALUES (DEFAULT, '${username}', '${dtNascimento}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function autenticar(email, senha) {
    
    var instrucaoSql = `
        SELECT idUsuario, username, dtNascimento, email, senha FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizar(idUsuario, username, dtNascimento, email, senha) {

    var instrucaoSql = `
        UPDATE usuario SET username = '${username}', dtNascimento = '${dtNascimento}', email = '${email}', senha = '${senha}' WHERE idUsuario = '${idUsuario}';
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    autenticar,
    atualizar
};