import express from 'express'
import mysql from 'mysql2/promise'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())


app.get("/produtos", async (req, res) => {
    let connection;
    try {
        connection = await mysql.createConnection({
            host: process.env.dbhost || "localhost",
            user: process.env.dbuser || "root",
            password: process.env.dbpassword || "",
            database: process.env.dbname || "banco1022b",
            port: process.env.dbport ? parseInt(process.env.dbport) : 3306
        });
        const [result, fields] = await connection.query("SELECT * FROM produtos");
        res.send(result);
    } catch (e) {
        console.error(e); // Para logar o erro no console
        res.status(500).send("Server ERROR");
    } finally {
        if (connection) await connection.end();
    }
});

app.get("/usuarios", async (req, res) => {
    let connection;
    try {
        connection = await mysql.createConnection({
            host: process.env.dbhost || "localhost",
            user: process.env.dbuser || "root",
            password: process.env.dbpassword || "",
            database: process.env.dbname || "banco1022b",
            port: process.env.dbport ? parseInt(process.env.dbport) : 3306
        });

        const [result] = await connection.query("SELECT * from usuarios");
        res.send(result);
    } catch (e) {
        console.error(e);  // Log do erro para entender o que está acontecendo
        res.status(500).send({ message: "Server ERROR"}); // Retorna o erro detalhado para facilitar o debug
    } finally {
        if (connection) await connection.end();  // Certifica que a conexão será fechada
    }
});


app.listen(8000, () => {
    console.log("Servidor Iniciado")
})