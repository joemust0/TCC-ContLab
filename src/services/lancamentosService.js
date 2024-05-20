const db = require('../db');

module.exports = {
    adicionarLancamentos: (num_atividade, lancamentos) => {
        return new Promise((resolve, reject) => {
            const values = lancamentos.map(lancamento => [
                num_atividade,
                lancamento.c_debito,
                lancamento.v_debito,
                lancamento.c_credito,
                lancamento.v_credito,
                lancamento.id_plano_de_contas,
                lancamento.conta_analitica,
                lancamento.chave_nf,
                lancamento.num_nf,
                lancamento.serie_nf
            ]);

            const sql = `
                INSERT INTO lancamentos (
                    num_atividade, c_debito, v_debito, c_credito, v_credito, id_plano_de_contas, conta_analitica, chave_nf, num_nf, serie_nf
                ) VALUES ?`;

            db.query(sql, [values], (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(results);
            });
        });
    },

    listarLancamentos: (num_atividade, id_usuario) => {
        return new Promise((resolve, reject) => {
            const sql = `
                SELECT l.* FROM lancamentos l
                JOIN balancos b ON l.num_atividade = b.num_atividade
                WHERE l.num_atividade = ? AND b.id_usuario = ?
            `;
            db.query(sql, [num_atividade, id_usuario], (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(results);
            });
        });
    },

    atualizarLancamento: (id, lancamento, id_usuario) => {
        return new Promise((resolve, reject) => {
            const sql = `
                UPDATE lancamentos SET
                    c_debito = ?, v_debito = ?, c_credito = ?, v_credito = ?, id_plano_de_contas = ?, conta_analitica = ?, chave_nf = ?, num_nf = ?, serie_nf = ?
                WHERE id = ? AND num_atividade IN (SELECT num_atividade FROM balancos WHERE id_usuario = ?)
            `;
            const values = [
                lancamento.c_debito,
                lancamento.v_debito,
                lancamento.c_credito,
                lancamento.v_credito,
                lancamento.id_plano_de_contas,
                lancamento.conta_analitica,
                lancamento.chave_nf,
                lancamento.num_nf,
                lancamento.serie_nf,
                id,
                id_usuario
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

    apagarLancamento: (id, id_usuario) => {
        return new Promise((resolve, reject) => {
            const sql = `
                DELETE FROM lancamentos WHERE id = ? AND num_atividade IN (SELECT num_balanco FROM balancos WHERE id_usuario = ?)
            `;
            db.query(sql, [id, id_usuario], (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(results);
            });
        });
    },

    apagarLancamentos: (num_atividade) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM lancamentos WHERE num_atividade = ?', 
            [num_atividade], (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(results);
            });
        });
    }
};