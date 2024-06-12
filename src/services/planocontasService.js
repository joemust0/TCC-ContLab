const db =require('../db')

module.exports = {
    buscarTodos: () =>{
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM planodecontas', (error, results) =>{
                if(error) {
                    rejeitado(error);
                    return; }
                aceito(results);
                });

        });
    },

    buscarFilhos: (id) =>{
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM planodecontas WHERE id = ?', [id], (error, results) =>{
                if(error) {rejeitado(error); return; }
                aceito(results);
                });

        });
    }
};