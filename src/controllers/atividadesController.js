const atividadesService = require('../services/atividadesService')

module.exports = {
    //criação de atividades
    criarAtividade: async (req, res) => {
        let json = {results: {}, error: ''};

        let id_usuario = req.body.id_usuario;
        let c_debito = req.body.c_debito || null;
        let v_debito = req.body.v_debito || null;
        let c_credito = req.body.c_credito || null;
        let v_credito = req.body.v_credito || null;
        let id_plano_de_contas = req.body.id_plano_de_contas || null;
        let conta_analitica = req.body.conta_analitica || null;
        let chave_nf = req.body.chave_nf || null;
        let num_nf = req.body.num_nf || null;
        let serie_nf = req.body.serie_nf || null;
        let data_criacao = req.body.data_criacao || null;
        let data_emissao = req.body.data_emissao || null;
        let nome_balanco = req.body.nome_balanco;
        let descricao_balanco = req.body.descricao_balanco;

        if(id_usuario && nome_balanco && descricao_balanco){

            let atividadeCodigo = await atividadesService.criarAtividade(id_usuario, c_debito, v_debito, c_credito, v_credito, id_plano_de_contas, conta_analitica, chave_nf, num_nf, serie_nf, data_criacao, data_emissao, nome_balanco, descricao_balanco);

            json.results = {
                num_atividade: atividadeCodigo,
                id_usuario,
                c_debito,
                v_debito,
                c_credito,
                v_credito,
                id_plano_de_contas,
                conta_analitica,
                chave_nf,
                num_nf,
                serie_nf,
                data_criacao,
                data_emissao,
                nome_balanco,
                descricao_balanco
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);

    },

    listaAtividades: async(req, res) => {
        let json = {error:'', results:[]};

        let  exibirAt = await atividadesService.listaAtividades();

        for(let i in exibirAt){
            json.results.push({
                nome_balanco: exibirAt[i].nome_balanco,
                descricao_balanco: exibirAt[i].descricao_balanco,
                id_usuario: exibirAt[i].id_usuario,
                chave_nf: exibirAt[i].chave_nf,
                num_nf: exibirAt[i].num_nf,
                serie_nf: exibirAt[i].serie_nf,
                data_criacao: exibirAt[i].data_criacao,
                data_emissao: exibirAt[i].data_emissao,
                id_plano_de_contas: exibirAt[i].id_plano_de_contas,
                conta_analitica: exibirAt[i].conta_analitica,
                c_debito: exibirAt[i].c_debito,
                v_debito: exibirAt[i].v_debito,
                c_credito: exibirAt[i].c_credito,
                v_credito: exibirAt[i].v_credito,

            });
        }
        res.json(json);
    },

    buscarAtividadeId: async(req, res) => {

    },

    atualizarAtividade: async(req, res) => {

    },

    apagarAtividade: async(req, res) => {
        
    }

    }
