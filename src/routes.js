const express = require('express');
const router = express.Router();

const planocontasController = require(`./controllers/planocontasController`);
const usuariosController = require('./controllers/usuariosController');

//rotas-plano de contas
router.get('/pcontas', planocontasController.buscarTodos);

//rotas-usuarios
router.get('/usuarios', usuariosController.exibUsuarios);
router.get('/usuario/:id', usuariosController.buscarUsuario);
router.post('/usuario', usuariosController.criarUsuario);
router.put('/usuario/:id', ususarioController.alterarDados);

//rotas-atividades


module.exports = router;