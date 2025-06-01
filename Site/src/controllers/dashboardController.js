var dashboardModel = require("../models/dashboardModel");

// Número de usuários que respondeu o quiz
function numUsuarios(req, res) {

    dashboardModel.numUsuarios()
        .then(resultado => {
            res.json(resultado);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

// Média de acerto dos usuários no quiz
function mediaAcertos(req, res) {

    dashboardModel.mediaAcertos()
        .then(resultado => {
            res.json(resultado);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

// Média de acerto dos usuários no quiz
function porcentAcertos(req, res) {

    dashboardModel.porcentAcertos()
        .then(resultado => {
            res.json(resultado);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

// Média de acerto dos usuários no quiz
function porcentErros(req, res) {

    dashboardModel.porcentErros()
        .then(resultado => {
            res.json(resultado);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

// Desempenho dos usuários no quiz
function desempenho(req, res) {

    dashboardModel.desempenho()
        .then(resultado => {
            res.json(resultado);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

// média de acertos em cada questão do quiz
function mediaQuestao(req, res) {

    dashboardModel.mediaQuestao()
        .then(resultado => {
            res.json(resultado);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    numUsuarios,
    mediaAcertos,
    porcentAcertos,
    porcentErros,
    desempenho,
    mediaQuestao
};
