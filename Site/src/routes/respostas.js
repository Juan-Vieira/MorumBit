var express = require("express");
var router = express.Router();

var respostasController = require("../controllers/respostasController");

router.post("/questao", function (req, res) {
    respostasController.questao(req, res);
});

router.post("/registrarResposta", function (req, res) {
    respostasController.registrarResposta(req, res);
});

module.exports = router;
