const exibirUs = require('../controllers/usuariosController')
const buscarUsuario = require('../controllers/usuariosController')
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

   buscarUsuario: (cadastro) =>{
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM usuario WHERE cadastro = ?',[cadastro], (error, results) =>{
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
