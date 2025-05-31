var respostaModel = require("../models/respostaModel");

function questao(req, res) {
    var numeroQuest = req.body.numeroQuestServer;

    respostaModel.questao(numeroQuest)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao inserir a questão! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function registrarResposta(req, res) {
    var fkTentativa = req.body.fkTentativaServer;
    var fkQuestao = req.body.fkQuestaoServer;
    var acertoQuestao = req.body.acertoQuestaoServer;

    respostaModel.registrarResposta(fkTentativa, fkQuestao, acertoQuestao)
        .then(resultado => {
            res.json(resultado);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    questao,
    registrarResposta
};
