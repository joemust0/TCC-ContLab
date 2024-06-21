const db = require('../db');

module.exports = {
    exibUsuarios: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM usuarios', (error, results) => {
                if (error) { 
                    reject(error); 
                    return; 
                }
                resolve(results);
            });
        });
    },

    buscarUsuario: (id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM usuarios WHERE id = ?', [id], (error, results) => {
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

    criarUsuario: (nome, nickname, email, senha, instituicao, responsavel) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO usuarios (nome, nickname, email, senha, instituicao, responsavel) VALUES (?, ?, ?, ?, ?, ?)', 
            [nome, nickname, email, senha, instituicao, responsavel], 
            (error, results) => {
                if (error) {
                    reject(error); 
                    return; 
                }
                resolve(results.insertId);
            });
        });
    },

    alterarDados: (id, nome, nickname, email, senha, instituicao, responsavel) => {
        return new Promise((resolve, reject) => {
            db.query('UPDATE usuarios SET nome = ?, nickname = ?, email = ?, senha = ?, instituicao = ?, responsavel = ? WHERE id = ?', 
            [nome, nickname, email, senha, instituicao, responsavel, id], 
            (error, results) => {
                if (error) {
                    reject(error); 
                    return; 
                }
                resolve(results);
            });
        });
    },

    apagarDados: (id) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM usuarios WHERE id = ?', [id], (error, results) => {
                if (error) {
                    reject(error); 
                    return; 
                }
                resolve(results); 
            });
        });
    },

    login: (email, senha) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM usuarios WHERE email = ? AND senha = ?', [email, senha], (error, results) => {
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
    }
};
