const express = require('express');
const router = express.Router();

const planocontasController = require(`./controllers/planocontasController`);
const usuariosController = require('./controllers/usuariosController');


router.get('/pcontas', planocontasController.buscarTodos);
router.get('/usuarios', usuariosController.exibUsuarios);
router.get('/usuario/:cadastro', usuariosController.buscarUsuario);
router.post('/usuario', usuariosController.criarUsuario);

module.exports = router;