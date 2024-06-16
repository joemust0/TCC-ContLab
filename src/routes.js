const express = require('express');
const router = express.Router();

const planocontasController = require(`./controllers/planocontasController`);
const usuariosController = require('./controllers/usuariosController');
const balancosController = require('./controllers/balancosController');
const lancamentosController = require('./controllers/lancamentosController');

//rotas-plano de contas
router.get('/pcontas', planocontasController.buscarTodos);
router.get('/pcontas/:id', planocontasController.buscarFilhos);


//rotas-usuarios
router.get('/usuarios', usuariosController.exibUsuarios);
router.get('/usuario/:id', usuariosController.buscarUsuario);
router.post('/usuario', usuariosController.criarUsuario);
router.put('/usuario/:id', usuariosController.alterarDados);
router.delete('/usuario/:id', usuariosController.apagarDados);

//rotas-balancos
router.post('/balancos', balancosController.criarBalanco);
router.get('/balancos', balancosController.listarBalancos);
router.get('/balancos/:id_usuario', balancosController.buscarBalanco);
router.get('/balancos/:id_usuario/:num_balanco', balancosController.buscarBalancoAtiv);
router.put('/balancos/:id_usuario/:num_balanco', balancosController.atualizarBalanco);
router.delete('/balancos/:id_usuario/:num_balanco', balancosController.apagarBalanco);

//rotas-lancamentos
router.post('/lancamentos', lancamentosController.adicionarLancamentos);
router.get('/lancamentos/:num_balanco', lancamentosController.listarLancamentos);
router.get('/lancamentos/:num_balanco/:num_nf', lancamentosController.buscarLancamentosNf);
router.put('/lancamentos/:num_balanco/:num_nf', lancamentosController.atualizarLancamentos);
router.delete('/lancamentos/:num_balanco/:num_nf', lancamentosController.apagarLancamento);
router.delete('/lancamentos/:num_balanco', lancamentosController.apagarLancamentos);

module.exports = router;