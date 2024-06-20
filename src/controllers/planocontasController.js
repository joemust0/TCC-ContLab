const planocontasService = require('../services/planocontasService');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {error: '', result:[]};

        let contas = await planocontasService.buscarTodos();

        for(let i in contas){
            json.result.push({
                id: contas[i].id,
                tipo: contas[i].tipo,
                periodo_c: contas[i].periodo_c,
                modelo: contas[i].modelo,
                conta: contas[i].conta,
                conta_analitica: contas[i].conta_analitica
            });
        }
        res.json(json);
    },

    buscarFilhos: async (req, res) => {
        let json = {error: '', result:[]};

        let id = req.params.id;
        let contas = await planocontasService.buscarFilhos(id);

        for(let i in contas){
            json.result.push({
                id: contas[i].id,
                tipo: contas[i].tipo,
                periodo_c: contas[i].periodo_c,
                modelo: contas[i].modelo,
                conta: contas[i].conta,
                conta_analitica: contas[i].conta_analitica
            });
        }
        res.json(json);
    }
};