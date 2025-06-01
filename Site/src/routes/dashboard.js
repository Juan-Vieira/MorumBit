var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/numUsuarios", function (req, res) {
    dashboardController.numUsuarios(req, res);
});

router.get("/mediaAcertos", function (req, res) {
    dashboardController.mediaAcertos(req, res);
});

router.get("/porcentAcertos", function (req, res) {
    dashboardController.porcentAcertos(req, res);
});

router.get("/porcentErros", function (req, res) {
    dashboardController.porcentErros(req, res);
});

router.get("/desempenhoUsers", function (req, res) {
    dashboardController.desempenho(req, res);
});

router.get("/mediaQuestao", function (req, res) {
    dashboardController.mediaQuestao(req, res);
});

module.exports = router;
