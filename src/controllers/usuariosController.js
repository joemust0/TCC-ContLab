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
        let json = {error: '', result:{}};

        let nome = req.body.Nome_Completo;
        let nickname = req.body.apelido;
        let email = req.body.email;
        let senha = req.body.senha;
        let instituicao = req.body.instituicao;
        let responsavel = req.body.responsavel;

        if(nome && nickname && email && senha && instituicao && responsavel){
            let cadUser = await usuariosService.cadUsuario(nome, nickname, email, senha, instituicao, responsavel);
            json.result = {
                cadastro: cadUser,
                nome,
                nickname,
                email,
                senha,
                instituicao,
                responsavel
            };
        }else{
            json.error = 'Campos não enviados';
        }

        res.json(json);
        
    }
}
