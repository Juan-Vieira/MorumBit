var tentativaModel = require("../models/tentativaModel");

function iniciar(req, res) {
    var acerto = req.body.acertoServer;
    var fkUsuario = req.body.fkUsuarioServer;

    tentativaModel.iniciar(acerto, fkUsuario)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao iniciar a tentativa do quiz! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    iniciar
};
