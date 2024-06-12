const mysql = require('mysql');
const fs = require('fs');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    ssl: {
    ca: fs.readFileSync(process.env.DB_SSL_CA)
  }
});

connection.connect((error) => {
    if (error) {
        console.error('Erro ao conectar a base de dados:', error);
        return;
    }
    console.log(`Conectado ao Banco de Dados: ${process.env.DB_DATABASE}`);
});

module.exports = connection;
