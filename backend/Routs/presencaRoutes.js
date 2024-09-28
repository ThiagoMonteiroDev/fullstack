
const express = require("express");
const router = express.Router();
const presencaController = require("../controllers/presencaController");


router.post("/", presencaController.registrarPresenca);


router.get("/", presencaController.listarPresencas);

module.exports = router;
