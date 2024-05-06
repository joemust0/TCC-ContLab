const { buscarTodos } = require('../controllers/planocontasController');
const db =require('../db')

module.exports = {
    buscarTodos: () =>{
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM planodecontas', (error, results) =>{
                if(error) {rejeitado(error); return; }
                aceito(results);
            });

        });
    }

   
};