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

module.exports = {
    numUsuarios,
    mediaAcertos
};
