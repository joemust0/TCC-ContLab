const lancamentosService = require('../services/lancamentosService');

module.exports = {
    adicionarLancamentos: async (req, res) => {
        let json = { results: {}, error: '' };

        let num_atividade = req.body.num_atividade;
        let lancamentos = req.body.lancamentos;

        if (num_atividade && Array.isArray(lancamentos) && lancamentos.length > 0) {
            try {
                let results = await lancamentosService.adicionarLancamentos(num_atividade, lancamentos);
                json.results = results;
            } catch (error) {
                json.error = error.message;
            }
        } else {
            json.error = 'Campos não enviados ou dados incompletos';
        }
        res.json(json);
    },

    //listar todos os lançamentos da atividade
    listarLancamentos: async (req, res) => {
        let json = { error: '', results: [] };

        try {
            let num_atividade = req.params.num_atividade;

            let lancamentos = await lancamentosService.listarLancamentos(num_atividade);
            for (let lancamento of lancamentos) {
                json.results.push(lancamento);
            }
        } catch (error) {
            json.error = error;
        }
        res.json(json);
    },

        //listar por nf da atividade
        buscarLancamentosNf: async (req, res) => {
            let json = { error: '', results: [] };
    
            try {
                let num_atividade = req.params.num_atividade;
                let num_nf = req.params.num_nf;

                let lancamento = await lancamentosService.buscarLancamentosNf(num_atividade, num_nf);
                if (lancamento && lancamento.length > 0) {
                    json.result = lancamento;
                }else{
                    json.error = 'Lançamento não encontrado';
                }
            } catch (error) {
                json.error = error.message;
                console.error(error);
            }
            res.json(json);
        },


        atualizarLancamentos: async (req, res) => {
            let json = { results: {}, error: '' };
        
            let num_atividade = req.params.num_atividade;
            let num_nf = req.params.num_nf;
            let lancamentos = req.body.lancamentos;
        
            if (num_atividade && num_nf && Array.isArray(lancamentos) && lancamentos.length > 0) {
                try {
                    let results = await lancamentosService.atualizarLancamentos(num_atividade, num_nf, lancamentos);
                    json.results = results;
                } catch (error) {
                    json.error = error.message;
                }
            } else {
                json.error = 'Campos não enviados ou dados incompletos';
            }
            res.json(json);
        },
        
        
        apagarLancamento: async (req, res) => {
            let json = { error: '', results: {} };
    
            try {
                let num_atividade = req.params.num_atividade;
                let num_nf = req.params.num_nf;
                await lancamentosService.apagarLancamento(num_atividade, num_nf);
                json.results = { message: 'Lançamento apagado com sucesso' };
            } catch (error) {
                json.error = error;
            }
            res.json(json);
        },

    apagarLancamentos: async (req, res) => {
        let json = { error: '', results: {} };

        try {
            let num_atividade = req.params.num_atividade;
            await lancamentosService.apagarLancamentos(num_atividade);
            json.results = { message: 'Lançamento apagado com sucesso' };
        } catch (error) {
            json.error = error;
        }
        res.json(json);
    }
};



