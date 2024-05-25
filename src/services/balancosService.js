const db = require('../db')

module.exports = {

    criarBalanco: (balanco) => {
        return new Promise((aceito, rejeitado) => {
            const sql = `
                INSERT INTO balancos (id_usuario, nome_balanco, descricao_balanco, data_criacao, data_emissao)
                VALUES (?, ?, ?, ?, ?)
            `;
            const values = [
                balanco.id_usuario,
                balanco.nome_balanco,
                balanco.descricao_balanco,
                balanco.data_criacao,
                balanco.data_emissao
            ];

            db.query(sql, values, (error, results) => {
                if (error) {
                    rejeitado(error);
                    return;
                }
                aceito(results.insertId);
            });
        });
    },

    listarBalancos: (id_usuario) => {
        return new Promise((aceito, rejeitado) => {
            const sql = `SELECT * FROM balancos`;
            db.query(sql, (error, results) => {
                if (error) {
                    rejeitado(error);
                    return;
                }
                aceito(results);
            });
        });
    },

    buscarBalanco: (id_usuario) => {
        return new Promise((aceito, rejeitado) => {
            const sql = `SELECT * FROM balancos WHERE id_usuario = ?`;
            db.query(sql, [id_usuario], (error, results) => {
                if (error) {
                    rejeitado(error);
                    return;
                }
                    aceito(results);
            });
        });
    },

    buscarBalancoAtiv: (id_usuario, num_atividade) => {
        return new Promise((resolve, reject) => {
            
            const sql = `
            SELECT * FROM balancos
            WHERE id_usuario = ? AND num_atividade = ?
            `;
             
            db.query(sql, [id_usuario, num_atividade], 
                (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(results);
            });
        });
    },
 
    atualizarBalanco: (id_usuario, num_atividade, balanco) => {
        return new Promise((aceito, rejeitado) => {
            
            const { nome_balanco, descricao_balanco, data_criacao, data_emissao } = balanco;

            const sql = `
                UPDATE balancos SET
                nome_balanco = ?, descricao_balanco = ?, data_criacao = ?, data_emissao = ?
                WHERE id_usuario = ? AND  num_atividade = ? 
            `;
            const values = [
                nome_balanco,
                descricao_balanco,
                data_criacao,
                data_emissao,
                id_usuario,
                num_atividade
               ];

            db.query(sql, values, (error, results) => {
                if (error) {
                    rejeitado(error);
                    return;
                }
                aceito(results);
            });
        });
    },

    apagarBalanco: (id_usuario, num_atividade,) => {
        return new Promise((resolve, rejeitado) => {
            
            db.query('DELETE FROM balancos WHERE id_usuario = ? AND num_atividade = ?',
            [ id_usuario, num_atividade], 
            (error, results) => {
                if (error) {rejeitado(error);
                    return;
                }
                resolve(results);
            });
        });
    }

};