const criarAtividade = require('../controllers/atividadesController')
const listaAtividades = require('../controllers/atividadesController')
const buscarAtividadeId = require('../controllers/atividadesController')
const atualizarAtividade = require('../controllers/atividadesController')
const apagarAtividade = require('../controllers/atividadesController')
const db = require('../db')

module.exports = {

    criarAtividade: () => {
        return new Promise((aceito, rejeitado) => {

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
        return new Promise((aceito, rejeitado) => {
            db.query('UPDATE atividades SET id_usuario = ?, c_debito = ?, v_debito = ?, c_credito = ?, v_credito = ?, id_plano_de_contas = ?, conta_analitica = ?, chave_nf = ?, num_nf = ?, serie_nf = ?, data_criacao = ?, data_emissao = ?, nome_balanco = ?, descricao_balanco = ? WHERE num_atividade = ?',
            [
                atividades.id_usuario,
                atividades.c_debito,
                atividades.v_debito,
                atividades.c_credito,
                atividades.v_credito,
                atividades.id_plano_de_contas,
                atividades.conta_analitica,
                atividades.chave_nf,
                atividades.num_nf,
                atividades.serie_nf,
                atividades.data_criacao,
                atividades.data_emissao,
                atividades.nome_balanco,
                atividades.descricao_balanco,
                num_atividade
            ],
            (error, results) => {
                if(error) {rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    apagarAtividade: (nome_balanco) => {
        return new Promise((aceito, rejeitado) => {

            db.query('DELETE FROM atividades WHERE nome_balanco = ?',
                [nome_balanco],
                (error, results) => {
                    if(error) {rejeitado(error); return; }
                    aceito(results);
                });
        });
    }


}