const express = require('express');
const router = express.Router();

const planocontasController = require(`./controllers/planocontasController`);
const usuariosController = require('./controllers/usuariosController');
const balancosController = require('./controllers/balancosController');
const lancamentosController = require('./controllers/lancamentosController');

//rotas-plano de contas
router.get('/pcontas', planocontasController.buscarTodos);

//rotas-usuarios
router.get('/usuarios', usuariosController.exibUsuarios);
router.get('/usuario/:id', usuariosController.buscarUsuario);
router.post('/usuario', usuariosController.criarUsuario);
router.put('/usuario/:id', usuariosController.alterarDados);
router.delete('/usuario/:id', usuariosController.apagarDados);

//rotas-balancos
router.post('/balancos', balancosController.criarBalanco);
router.get('/balancos', balancosController.listarBalancos);
router.get('/balancos/:num_balanco/:id_usuario', balancosController.buscarBalanco);
router.put('/balancos/:num_balanco', balancosController.atualizarBalanco);
router.delete('/balancos/:num_balanco', balancosController.apagarBalanco);

//rotas-lancamentos
router.post('/lancamentos', lancamentosController.adicionarLancamentos);
router.get('/lancamentos/:num_balanco', lancamentosController.listarLancamentos);
router.put('/lancamentos/:id', lancamentosController.atualizarLancamento);
router.delete('/lancamentos/:id', lancamentosController.apagarLancamento);

module.exports = router;