var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");


router.get("/carregarDash/:idUsuario", function (req, res) {
    dashController.carregarDash(req, res);
});


module.exports = router;