const express = require('express');
const router = express.Router();

const planocontasController = require(`./controllers/planocontasController`)


router.get('/pcontas', planocontasController.buscarTodos)

module.exports = router;