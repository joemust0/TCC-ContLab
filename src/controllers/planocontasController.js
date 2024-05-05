const planocontasService = require('../services/planocontasService');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {error: '', result:[]};

        let contas = await planocontasService.buscarTodos();

        for(let i in contas){
            json.result.push({
                id: contas[i].id,
                codigo: contas[i].TIPO,
                estado: contas[i].estado,
                titulo: contas[i].titulo,
                conta: contas[i].conta,
                conta_analitica: contas[i].conta_analitica
            });
        }
        res.json(json);
    }
}