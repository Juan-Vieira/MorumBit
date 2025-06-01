var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/numUsuarios", function (req, res) {
    dashboardController.numUsuarios(req, res);
});

router.get("/mediaAcertos", function (req, res) {
    dashboardController.mediaAcertos(req, res);
});

module.exports = router;
