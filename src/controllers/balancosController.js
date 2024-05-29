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
            data_modificacao: req.body.data_modificacao
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

    buscarBalancoAtiv: async (req, res) => {
        let json = { error: '', result: {} };
    
        try {
            let id_usuario = req.params.id_usuario;
            let num_balanco = req.params.num_balanco;
    
            // Adicionar log para depuração
            console.log(`Buscando balanço para id_usuario: ${id_usuario} e num_balanco: ${num_balanco}`);
    
            let balanco = await balancosService.buscarBalancoAtiv(id_usuario, num_balanco); // Passar os parâmetros corretamente
            if (balanco && balanco.length > 0) {
                json.result = balanco; // Corrigido para retornar os resultados
            } else {
                json.error = 'Balanço não encontrado';
            }
        } catch (error) {
            json.error = error.message; // Certifique-se de capturar a mensagem de erro
            console.error(error); // Log do erro para depuração
        }
        res.json(json);
    },
    

    atualizarBalanco: async (req, res) => {
        let json = { results: {}, error: '' };
    
        let num_balanco = req.params.num_balanco;
        let id_usuario = req.params.id_usuario;
        let nome_balanco= req.body.nome_balanco ||null;
        let descricao_balanco= req.body.descricao_balanco || null;
        let data_criacao= req.body.data_criacao || null;
        let data_modificacao= req.body.data_modificacao 
        
        if (id_usuario && num_balanco) {
            try {
                const balanco = {
                    nome_balanco,
                    descricao_balanco,
                    data_criacao,
                    data_modificacao
                };
                await balancosService.atualizarBalanco(id_usuario, num_balanco, balanco);
                json.results = { 
                    num_balanco,
                    nome_balanco,
                    descricao_balanco,
                    data_criacao,
                    data_modificacao
                };
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
            let id_usuario = req.params.id_usuario;

            //para apagar os lançamentos
            await lancamentosService.apagarLancamentos(num_balanco);

            //para apagar o balanço
            await balancosService.apagarBalanco(id_usuario, num_balanco);
            json.results = { message: 'Balanço e lançamentos associados apagados com sucesso' };
        } catch (error) {
            json.error = error;
        }
        res.json(json);
    }
};