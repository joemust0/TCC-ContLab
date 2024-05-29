const db = require('../db');

module.exports = {
    adicionarLancamentos: (num_balanco, lancamentos) => {
        return new Promise((resolve, reject) => {
            const values = [];
            
                    lancamentos.forEach(lancamento => {
                        lancamento.debito.forEach(debito => {
                            values.push([
                                num_balanco,
                                lancamento.num_nf,
                                lancamento.serie_nf,
                                lancamento.chave_nf,
                                lancamento.data_criacao,
                                lancamento.data_entrada,
                                debito.c_debito,
                                debito.v_debito,
                                null,
                                null,
                                debito.id_plano_de_contas,
                                debito.conta_analitica,
                            ]);
                        });

                    lancamento.credito.forEach(credito => {
                        values.push([
                            num_balanco,
                            lancamento.num_nf,
                            lancamento.serie_nf,
                            lancamento.chave_nf,
                            lancamento.data_criacao,
                            lancamento.data_entrada,
                            null,
                            null,
                            credito.c_credito,
                            credito.v_credito,
                            credito.id_plano_de_contas,
                            credito.conta_analitica
                        ]);
                    });
            });

            const sql = `
                INSERT INTO lancamentos (
                    num_balanco, num_nf, serie_nf, chave_nf, data_criacao, data_entrada, c_debito,
                    v_debito, c_credito, v_credito, id_plano_de_contas, conta_analitica) VALUES ?`;

            db.query(sql, [values], (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(results);
            });
        });
    },

    listarLancamentos: (num_balanco) => {
        return new Promise((resolve, reject) => {
            const sql = `
                SELECT * FROM lancamentos
                WHERE num_balanco = ?
            `;
            db.query(sql, [num_balanco], (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(results);
            });
        });
    },

    buscarLancamentosNf: (num_balanco, num_nf) => {
        return new Promise((resolve, reject) => {

            const sql = `
                SELECT * FROM lancamentos
                WHERE num_balanco = ? AND num_nf = ?
            `;
            db.query(sql, [num_balanco, num_nf],
                (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(results);
            });
        });
    },
    
    atualizarLancamentos: (num_balanco, num_nf, lancamentos) => {
        return new Promise((resolve, reject) => {
            const deleteSql = `
                DELETE FROM lancamentos
                WHERE num_balanco = ? AND num_nf = ?
            `;
            db.query(deleteSql, [num_balanco, num_nf], (deleteError) => {
                if (deleteError) {
                    reject(deleteError);
                    return;
                }
    
                const values = [];
                lancamentos.forEach(lancamento => {
                    lancamento.debito.forEach(debito => {
                        values.push([
                            num_balanco,
                            lancamento.num_nf,
                            lancamento.serie_nf,
                            lancamento.chave_nf,
                            lancamento.data_criacao,
                            lancamento.data_entrada,
                            debito.c_debito,
                            debito.v_debito,
                            null,
                            null,
                            debito.id_plano_de_contas,
                            debito.conta_analitica,
                        ]);
                    });

                lancamento.credito.forEach(credito => {
                    values.push([
                        num_balanco,
                        lancamento.num_nf,
                        lancamento.serie_nf,
                        lancamento.chave_nf,
                        lancamento.data_criacao,
                        lancamento.data_entrada,
                        null,
                        null,
                        credito.c_credito,
                        credito.v_credito,
                        credito.id_plano_de_contas,
                        credito.conta_analitica
                    ]);
                    });
                });
    
                const insertSql = `
                INSERT INTO lancamentos (
                    num_balanco, num_nf, serie_nf, chave_nf, data_criacao, data_entrada, c_debito,
                    v_debito, c_credito, v_credito, id_plano_de_contas, conta_analitica) VALUES ?`;
                db.query(insertSql, [values], (insertError, insertResults) => {
                    if (insertError) {
                        reject(insertError);
                        return;
                    }
                    resolve(insertResults);
                });
            });
        });
    },
    
    
    apagarLancamento: (num_balanco, num_nf) => {
        return new Promise((aceito, rejeitado) => {
            db.query('DELETE FROM lancamentos WHERE num_balanco = ? AND num_nf = ?', 
            [num_balanco, num_nf],
            (error, results) => {
                if (error) {rejeitado(error);
                    return;
                }
                aceito(results);
            });
        });
    },

    apagarLancamentos: (num_balanco) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM lancamentos WHERE num_balanco = ?', 
            [num_balanco], (error, results) => {
                if (error) {reject(error);
                    return;
                }
                resolve(results);
            });
        });
    }

};
