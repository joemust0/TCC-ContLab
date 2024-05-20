const db = require('../db')

module.exports = {

    criarBalanco: (balanco) => {
        return new Promise((resolve, reject) => {
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
                    reject(error);
                    return;
                }
                resolve(results.insertId);
            });
        });
    },

    listarBalancos: (id_usuario) => {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM balancos WHERE id_usuario = ?`;
            db.query(sql, [id_usuario], (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(results);
            });
        });
    },

    buscarBalanco: (num_atividade, id_usuario) => {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM balancos WHERE num_atividade = ? AND id_usuario = ?`;
            db.query(sql, [num_atividade, id_usuario], (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }
                if (results.length > 0) {
                    resolve(results[0]);
                } else {
                    resolve(false);
                }
            });
        });
    },

    atualizarBalanco: (num_atividade, balanco) => {
        return new Promise((resolve, reject) => {
            const sql = `
                UPDATE balancos SET
                    nome_balanco = ?, descricao_balanco = ?, data_criacao = ?, data_emissao = ?
                WHERE num_atividade = ? AND id_usuario = ?
            `;
            const values = [
                balanco.nome_balanco,
                balanco.descricao_balanco,
                balanco.data_criacao,
                balanco.data_emissao,
                num_atividade,
                balanco.id_usuario
            ];

            db.query(sql, values, (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(results);
            });
        });
    },

    apagarBalanco: (num_atividade, id_usuario) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM balancos WHERE num_atividade = ? AND id_usuario = ?', [num_atividade, id_usuario], (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(results);
            });
        });
    }
};