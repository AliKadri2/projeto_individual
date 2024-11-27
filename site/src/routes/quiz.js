var express = require("express");
var router = express.Router();

var quizcontroler = require("../controllers/quizcontroler");


router.post("/salvardados", function (req, res) {
  quizcontroler.salvardados(req, res);
})

module.exports = router;