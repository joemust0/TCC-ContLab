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
            const sql = `SELECT * FROM balancos WHERE id_usuario = ? AND num_atividade = ?`;
            
            // Adicionar log para depuração
            console.log(`Executando SQL: ${sql} com id_usuario: ${id_usuario} e num_atividade: ${num_atividade}`);
            
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
 
    atualizarBalanco: (num_atividade, balanco) => {
        return new Promise((aceito, rejeitado) => {
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
                    rejeitado(error);
                    return;
                }
                aceito(results);
            });
        });
    },

    apagarBalanco: (num_atividade, id_usuario) => {
        return new Promise((resolve, rejeitado) => {
            
            db.query('DELETE FROM balancos WHERE id_usuario = ? AND num_atividade = ?', [ id_usuario, num_atividade], 
            (error, results) => {
                if (error) {
                    rejeitado(error);
                    return;
                }
                resolve(results);
            });
        });
    }
};