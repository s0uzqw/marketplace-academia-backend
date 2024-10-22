import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';

// Criar um objeto do tipo express.
const app = express();

// Middleware para receber JSON
app.use(express.json());

// Incluir o CORS para permitir requisições de diferentes portas
app.use(cors());

// Rota para obter produtos
app.get("/produtos", async (req, res) => {
    try {
        const conexao = await mysql.createConnection({
            host: process.env.dbhost ? process.env.dbhost : "localhost",
            user: process.env.dbuser ? process.env.dbuser : "root",
            password: process.env.dbpassword ? process.env.dbpassword : "",
            database: process.env.dbname ? process.env.dbname : "banco1022b",
            port: process.env.dbport ? parseInt(process.env.dbport) : 3306,
        });

        const [result, fields] = await conexao.query("SELECT * FROM produtos");
        await conexao.end();
        res.send(result);
    } catch (e) {
        res.status(500).send("Erro do servidor");
    }
});

// Rota para obter usuários
app.get("/usuarios", async (req, res) => {
    try {
        const conexao = await mysql.createConnection({
            host: process.env.dbhost ? process.env.dbhost : "localhost",
            user: process.env.dbuser ? process.env.dbuser : "root",
            password: process.env.dbpassword ? process.env.dbpassword : "",
            database: process.env.dbname ? process.env.dbname : "banco1022b",
            port: process.env.dbport ? parseInt(process.env.dbport) : 3306
        });

        // Query para selecionar usuários
        const [result, fields] = await conexao.query("SELECT * FROM usuarios");
        
        await conexao.end();
        res.send(result);
    } catch (e) {
        res.status(500).send("Erro do servidor");
    }
});

// Iniciar o servidor
app.listen(8000, () => {
    console.log("SERVIDOR INICIADO NA PORTA 8000");
});
