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


    atualizarLancamento: async (req, res) => {
        let json = { results: {}, error: '' };

        let id = req.params.id;
        let id_usuario = req.query.id_usuario;
        lancamentos.forEach(lancamento => {
                lancamento.debito.forEach(debito => {
                    values.push([
                        num_atividade,
                        debito.c_debito,
                        debito.v_debito,
                        null,
                        null,
                        debito.id_plano_de_contas,
                        debito.conta_analitica,
                        lancamento.chave_nf,
                        lancamento.num_nf,
                        lancamento.serie_nf
                    ]);
                });

                    lancamento.credito.forEach(credito => {
                        values.push([
                            num_atividade,
                            null,
                            null,
                            credito.c_credito,
                            credito.v_credito,
                            credito.id_plano_de_contas,
                            credito.conta_analitica,
                            lancamento.chave_nf,
                            lancamento.num_nf,
                            lancamento.serie_nf
                        ]);
                    });
            });

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

    apagarLancamentos: async (req, res) => {
        let json = { error: '', results: {} };

        try {
            let num_atividade = req.query.num_atividade;//alterar para localizar por usuario
            await lancamentosService.apagarLancamentos(num_atividade);
            json.results = { message: 'Lançamento apagado com sucesso' };
        } catch (error) {
            json.error = error;
        }
        res.json(json);
    }
};



