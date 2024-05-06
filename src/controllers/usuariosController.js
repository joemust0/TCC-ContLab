const usuariosService = require('../services/usuariosService');

module.exports = {

    exibUsuarios: async (req, res) => {
    let json = {error: '', result:[]};

    let exibirUs = await usuariosService.exibUsuarios();

    for(let i in exibirUs){
        json.result.push({
            cadastro: exibirUs[i].cadastro,
            nome: exibirUs[i].Nome_Completo,
            nickname: exibirUs[i].apelido,
            email: exibirUs[i].email,
            senha: exibirUs[i].senha,
            instituicao: exibirUs[i].instituicao,
            responsavel: exibirUs[i].responsavel
        });
    }
    res.json(json);
},

    buscarUsuario: async (req, res) => {
        let json = {error: '', result:{}};

        let cadastro = req.params.cadastro;
        let usuario = await usuariosService.buscarUsuario(cadastro);

        if(usuario){
            json.result = usuario;
        }
        res.json(json);
    },
    

    cadUsuario: async (req, res) => {
        let json = {error: '', result:[]};

        let cadUser = await usuariosService.cadUsuario();

        for(let i in cadUser){
            json.result.push({
                nome: cadUser[i].Nome_Completo,
                nickname: cadUser[i].apelido,
                email: cadUser[i].email,
                senha: cadUser[i].senha,
                instituicao: cadUser[i].instituicao,
                responsavel: cadUser[i].responsavel
            });
            res.json(json);
    }
    }
}
