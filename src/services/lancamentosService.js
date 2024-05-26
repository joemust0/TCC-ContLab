const db = require('../db');

module.exports = {
    adicionarLancamentos: (num_atividade, lancamentos) => {
        return new Promise((resolve, reject) => {
            const values = [];
            
                    lancamentos.forEach(lancamento => {
                        lancamento.debito.forEach(debito => {
                            values.push([
                                num_atividade,
                                debito.c_debito,
                                debito.v_debito,
                                null,
                                null,
                                debito.id_plano_de_contas,
                                debito.conta_analitica,
                                lancamento.chave_nf,
                                lancamento.num_nf,
                                lancamento.serie_nf
                            ]);
                        });

                    lancamento.credito.forEach(credito => {
                        values.push([
                            num_atividade,
                            null,
                            null,
                            credito.c_credito,
                            credito.v_credito,
                            credito.id_plano_de_contas,
                            credito.conta_analitica,
                            lancamento.chave_nf,
                            lancamento.num_nf,
                            lancamento.serie_nf
                        ]);
                    });
            });

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

    listarLancamentos: (num_atividade) => {
        return new Promise((resolve, reject) => {
            const sql = `
                SELECT * FROM lancamentos
                WHERE num_atividade = ?
            `;
            db.query(sql, [num_atividade], (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(results);
            });
        });
    },

    buscarLancamentosNf: (num_atividade, num_nf) => {
        return new Promise((resolve, reject) => {

            const sql = `
                SELECT * FROM lancamentos
                WHERE num_atividade = ? AND num_nf = ?
            `;
            db.query(sql, [num_atividade, num_nf],
                (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(results);
            });
        });
    },
    
    atualizarLancamentos: (num_atividade, num_nf, lancamentos) => {
        return new Promise((resolve, reject) => {
            const deleteSql = `
                DELETE FROM lancamentos
                WHERE num_atividade = ? AND num_nf = ?
            `;
            db.query(deleteSql, [num_atividade, num_nf], (deleteError, deleteResults) => {
                if (deleteError) {
                    reject(deleteError);
                    return;
                }
    
                const values = [];
                lancamentos.forEach(lancamento => {
                    lancamento.debito.forEach(debito => {
                        values.push([
                            num_atividade,
                            debito.c_debito,
                            debito.v_debito,
                            null,
                            null,
                            debito.id_plano_de_contas,
                            debito.conta_analitica,
                            lancamento.chave_nf,
                            lancamento.num_nf,
                            lancamento.serie_nf
                        ]);
                    });
    
                    lancamento.credito.forEach(credito => {
                        values.push([
                            num_atividade,
                            null,
                            null,
                            credito.c_credito,
                            credito.v_credito,
                            credito.id_plano_de_contas,
                            credito.conta_analitica,
                            lancamento.chave_nf,
                            lancamento.num_nf,
                            lancamento.serie_nf
                        ]);
                    });
                });
    
                const insertSql = `
                    INSERT INTO lancamentos (
                        num_atividade, c_debito, v_debito, c_credito, v_credito, id_plano_de_contas, conta_analitica, chave_nf, num_nf, serie_nf
                    ) VALUES ?
                `;
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
    
    
    apagarLancamento: (num_atividade, num_nf) => {
        return new Promise((aceito, rejeitado) => {
            db.query('DELETE FROM lancamentos WHERE num_atividade = ? AND num_nf = ?', 
            [num_atividade, num_nf],
            (error, results) => {
                if (error) {rejeitado(error);
                    return;
                }
                aceito(results);
            });
        });
    },

    apagarLancamentos: (num_atividade) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM lancamentos WHERE num_atividade = ?', 
            [num_atividade], (error, results) => {
                if (error) {reject(error);
                    return;
                }
                resolve(results);
            });
        });
    }

};
