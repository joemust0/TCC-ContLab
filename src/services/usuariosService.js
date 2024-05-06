const exibirUs = require('../controllers/usuariosController')
const exibirUsuario = require('../controllers/usuariosController')
const db = require('../db')

module.exports = {


    exibUsuarios: () =>{
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM usuario' , (error, results) =>{
                if(error) {rejeitado(error); return; }
                aceito(results);
            });
        });
    },

   exibirUsuario: () =>{
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM usuario WHERE id = ?',[cadastro], (error, results) =>{
                if(error) {rejeitado(error); return; }
               if(results.length > 0){
               aceito(results[0]);
            }else{
                aceito(false);
            }
            });

        });
    }
}
