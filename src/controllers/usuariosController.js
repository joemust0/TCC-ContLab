const usuariosService = require('../services/usuariosService');


module.exports = {
    //mosta todos os usuarios
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
    //Busca individual de usuario
    buscarUsuario: async (req, res) => {
        let json = {error: '', result:{}};

        let cadastro = req.params.cadastro;
        let usuario = await usuariosService.buscarUsuario(cadastro);

        if(usuario){
            json.result = usuario;
        }
        res.json(json);
    },
    
    // cadastro de usuarios
    criarUsuario: async (req, res) => {
        let json = {result:{}, error:''};

        let nome = req.body.nome;
        let nickname = req.body.nickname || null;
        let email = req.body.email;
        let senha = req.body.senha;
        let instituicao = req.body.instituicao || null;
        let responsavel = req.body.responsavel || null;

       

        if(nome && email && senha){
           
            let UsuarioCodigo = await usuariosService.criarUsuario(nome, nickname, email, senha, instituicao,responsavel);
           
            json.result = {
                codigo: UsuarioCodigo,
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
