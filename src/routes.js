const express = require('express');
const router = express.Router();

const planocontasController = require(`./controllers/planocontasController`);
const usuariosController = require('./controllers/usuariosController');
const balancosController = require('./controllers/balancosController');
const lancamentosController = require('./controllers/lancamentosController');

//rotas-plano de contas
router.get('/pcontas', async (req, res) => {
    try {
        const resultados = await planocontasController.buscarTodos();
        res.json(resultados);
    } catch (error) {
        console.error('Erro ao buscar todos os planos de contas:', error);
        res.status(500).send('Erro ao buscar todos os planos de contas');
    }
});
router.get('/pcontas/:id', async (req, res) => {
    try {
        const resultados = await planocontasController.buscarFilhos(req.params.id);
        res.json(resultados);
    } catch (error) {
        console.error(`Erro ao buscar filhos do plano de contas com ID ${req.params.id}:`, error);
        res.status(500).send(`Erro ao buscar filhos do plano de contas com ID ${req.params.id}`);
    }
});

//rotas-usuarios
router.get('/usuarios', async (req, res) => {
    try {
        const resultados = await usuariosController.exibUsuarios();
        res.json(resultados);
    } catch (error) {
        console.error('Erro ao exibir usuários:', error);
        res.status(500).send('Erro ao exibir usuários');
    }
});
router.get('/usuario/:id', async (req, res) => {
    try {
        const resultados = await usuariosController.buscarUsuario(req.params.id);
        res.json(resultados);
    } catch (error) {
        console.error(`Erro ao buscar usuário com ID ${req.params.id}:`, error);
        res.status(500).send(`Erro ao buscar usuário com ID ${req.params.id}`);
    }
});
router.post('/usuario', async (req, res) => {
    try {
        const { nome, email } = req.body;
        const resultados = await usuariosController.criarUsuario(nome, email);
        res.status(201).send('Usuário criado');
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        res.status(500).send('Erro ao criar usuário');
    }
});
router.put('/usuario/:id', async (req, res) => {
    try {
        const { nome, email } = req.body;
        const resultados = await usuariosController.alterarDados(req.params.id, nome, email);
        res.send('Dados do usuário atualizados');
    } catch (error) {
        console.error(`Erro ao atualizar dados do usuário com ID ${req.params.id}:`, error);
        res.status(500).send(`Erro ao atualizar dados do usuário com ID ${req.params.id}`);
    }
});
router.delete('/usuario/:id', async (req, res) => {
    try {
        const resultados = await usuariosController.apagarDados(req.params.id);
        res.send('Usuário deletado');
    } catch (error) {
        console.error(`Erro ao deletar usuário com ID ${req.params.id}:`, error);
        res.status(500).send(`Erro ao deletar usuário com ID ${req.params.id}`);
    }
});

//rotas-balancos
router.post('/balancos', balancosController.criarBalanco);
router.get('/balancos', balancosController.listarBalancos);
router.get('/balancos/:id_usuario', balancosController.buscarBalanco);
router.get('/balancos/:id_usuario/:num_balanco', balancosController.buscarBalancoAtiv);
router.put('/balancos/:id_usuario/:num_balanco', balancosController.atualizarBalanco);
router.delete('/balancos/:id_usuario/:num_balanco', balancosController.apagarBalanco);

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