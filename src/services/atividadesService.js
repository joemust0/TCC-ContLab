const db = require('../db')

module.exports = {

    criarAtividade: () => {
        return new Promise((aceito, rejeito) => {

            db.query('INSERT INTO atividades (id_usuario, c_debito, v_debito, c_credito, v_credito, id_plano_de_contas, conta_analitica,chave_nf, num_nf, serie_nf, data_criacao, data_emissao, nome_balanco, descricao_balanco) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [   atividade.id_usuario,
                atividade.c_debito,
                atividade.v_debito,
                atividade.c_credito,
                atividade.v_credito,
                atividade.id_plano_de_contas,
                atividade.conta_analitica,
                atividade.chave_nf,
                atividade.num_nf,
                atividade.serie_nf,
                atividade.data_criacao,
                atividade.data_emissao,
                atividade.nome_balanco,
                atividade.descricao_balanco
            ],
            (error, results) => {
                if(error) {rejeitado(error); return;}
                aceito(results.insertId);
            }
        );

        });
    },

    listaAtividades: () => {
        return new Promise((aceito, rejeitado) =>{

            db.query('SELECT * From atividades', (error, results) => {
                if(error) {rejeitado(error); return;}
                aceito(results);
            });
        });
    },

    buscarAtividadeId: (num_atividade) => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM atividades WHERE id = ?', 
        [num_atividade], (error, results) => {
            if(error) {rejeitado(error); return; }
            if(results.length > 0){
                aceito(results[0])
            }else{
                aceito(false);
            }
            });
        });
    },

    atualizarAtividade: (num_atividade) => {
        return new Promise((aceito, rejeito) => {
            db.query('UPDATE atividades SET id_usuario = ?, c_debito = ?, v_debito = ?, c_credito = ?, v_credito = ?, id_plano_de_contas = ?, conta_analitica = ?, chave_nf = ?, num_nf = ?, serie_nf = ?, data_criacao = ?, data_emissao = ?, nome_balanco = ?, descricao_balanco = ? WHERE num_atividade = ?',
            [
                atividade.id_usuario,
                atividade.c_debito,
                atividade.v_debito,
                atividade.c_credito,
                atividade.v_credito,
                atividade.id_plano_de_contas,
                atividade.conta_analitica,
                atividade.chave_nf,
                atividade.num_nf,
                atividade.serie_nf,
                atividade.data_criacao,
                atividade.data_emissao,
                atividade.nome_balanco,
                atividade.descricao_balanco,
                num_atividade
            ],
            (error, results) => {
                if(error) {rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    



}