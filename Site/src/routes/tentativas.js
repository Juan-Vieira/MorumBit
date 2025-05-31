var express = require("express");
var router = express.Router();

var tentativasController = require("../controllers/tentativasController");

router.post("/iniciar", function (req, res) {
    tentativasController.iniciar(req, res);
});

router.put("/atualizarAcerto", function (req, res) {
    tentativasController.atualizarAcerto(req, res);
});


module.exports = router;
