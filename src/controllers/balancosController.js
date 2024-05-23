const balancosService = require('../services/balancosService');
const lancamentosService = require('../services/lancamentosService');

module.exports = {
    criarBalanco: async (req, res) => {
        let json = { results: {}, error: '' };

        let balanco = {
            id_usuario: req.body.id_usuario,
            nome_balanco: req.body.nome_balanco,
            descricao_balanco: req.body.descricao_balanco,
            data_criacao: req.body.data_criacao || null,
            data_emissao: req.body.data_emissao || null
        };

        if (balanco.id_usuario && balanco.nome_balanco && balanco.descricao_balanco) {
            try {
                let num_balanco = await balancosService.criarBalanco(balanco);
                json.results = { num_balanco, ...balanco };
            } catch (error) {
                json.error = error;
            }
        } else {
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    listarBalancos: async (req, res) => {
        let json = { error: '', results: [] };

        try {
            let id_usuario = req.query.id_usuario;
            let balancos = await balancosService.listarBalancos(id_usuario);
            for (let balanco of balancos) {
                json.results.push(balanco);
            }
        } catch (error) {
            json.error = error;
        }
        res.json(json);
    },

    buscarBalanco: async (req, res) => {
        let json = { error: '', result: {} };

        try {
            let id_usuario = req.params.id_usuario;
            let balanco = await balancosService.buscarBalanco(id_usuario);
            if (balanco.length > 0) {
                json.result = balanco;
            } else {
                json.error = 'Balanço não encontrado';
            }
        } catch (error) {
            json.error = error;
        }
        res.json(json);
    },

    atualizarBalanco: async (req, res) => {
        let json = { results: {}, error: '' };

        let num_balanco = req.params.num_balanco;
        let id_usuario = req.query.id_usuario;
        let balanco = {
            nome_balanco: req.body.nome_balanco,
            descricao_balanco: req.body.descricao_balanco,
            data_criacao: req.body.data_criacao || null,
            data_emissao: req.body.data_emissao || null
        };

        if (balanco.nome_balanco && balanco.descricao_balanco) {
            try {
                await balancosService.atualizarBalanco(num_balanco, balanco, id_usuario);
                json.results = { num_balanco, ...balanco };
            } catch (error) {
                json.error = error;
            }
        } else {
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    apagarBalanco: async (req, res) => {
        let json = { error: '', results: {} };

        try {
            let num_balanco = req.params.num_balanco;
            let id_usuario = req.query.id_usuario;
            await lancamentosService.apagarLancamentos(num_balanco);
            await balancosService.apagarBalanco(num_balanco, id_usuario);
            json.results = { message: 'Balanço apagado com sucesso' };
        } catch (error) {
            json.error = error;
        }
        res.json(json);
    }
};