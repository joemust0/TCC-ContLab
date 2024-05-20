const lancamentosService = require('../services/lancamentosService');

module.exports = {
    adicionarLancamento: async (req, res) => {
        let json = { results: {}, error: '' };

        let num_balanco = req.body.num_balanco;
        let lancamento = {
            c_debito: req.body.c_debito || null,
            v_debito: req.body.v_debito || null,
            c_credito: req.body.c_credito || null,
            v_credito: req.body.v_credito || null,
            id_plano_de_contas: req.body.id_plano_de_contas || null,
            conta_analitica: req.body.conta_analitica || null,
            chave_nf: req.body.chave_nf || null,
            num_nf: req.body.num_nf || null,
            serie_nf: req.body.serie_nf || null
        };

        if (num_balanco) {
            try {
                let id_lancamento = await lancamentosService.adicionarLancamento(num_balanco, lancamento);
                json.results = { id_lancamento, num_balanco, ...lancamento };
            } catch (error) {
                json.error = error;
            }
        } else {
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    listarLancamentos: async (req, res) => {
        let json = { error: '', results: [] };

        try {
            let num_balanco = req.params.num_atividade;
            let id_usuario = req.query.id_usuario;
            let lancamentos = await lancamentosService.listarLancamentos(num_atividade, id_usuario);
            for (let lancamento of lancamentos) {
                json.results.push(lancamento);
            }
        } catch (error) {
            json.error = error;
        }
        res.json(json);
    },

    atualizarLancamento: async (req, res) => {
        let json = { results: {}, error: '' };

        let id = req.params.id;
        let id_usuario = req.query.id_usuario;
        let lancamento = {
            c_debito: req.body.c_debito || null,
            v_debito: req.body.v_debito || null,
            c_credito: req.body.c_credito || null,
            v_credito: req.body.v_credito || null,
            id_plano_de_contas: req.body.id_plano_de_contas || null,
            conta_analitica: req.body.conta_analitica || null,
            chave_nf: req.body.chave_nf || null,
            num_nf: req.body.num_nf || null,
            serie_nf: req.body.serie_nf || null
        };

        if (lancamento) {
            try {
                await lancamentosService.atualizarLancamento(id, lancamento, id_usuario);
                json.results = { id, ...lancamento };
            } catch (error) {
                json.error = error;
            }
        } else {
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    apagarLancamento: async (req, res) => {
        let json = { error: '', results: {} };

        try {
            let id = req.params.id;
            let id_usuario = req.query.id_usuario;
            await lancamentosService.apagarLancamento(id, id_usuario);
            json.results = { message: 'Lançamento apagado com sucesso' };
        } catch (error) {
            json.error = error;
        }
        res.json(json);
    }
};



