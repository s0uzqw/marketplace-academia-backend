// LIVE SERVER é do FRONT-END
// QUEM É O LIVE SERVER DO BACK-END?

// 1 - Para construir um servidor back-end e responder
// Vamos utilizar o EXPRESS
import express from 'express'
import cors from 'cors'
import mysql from 'mysql2/promise'
//Criar um objeto do tipo express.
const app = express()
//incluir pra ele receber json
app.use(express.json())  //Middleware
//incluir o CORS -> QUANDO A GENTE TEM OUTRA PORTA FAZENDO REQUISIÇÃO PARA A PORTA DO SERVIDOR
app.use(cors())
//ROTAS

import BancoMysql from './db/bancoMysql'

app.get("/produtos",async(req,res)=>{
    try{
        const banco = new BancoMysql();
        const result = await banco.query("SELECT * FROM produtos")
        console.log(result)
        await banco.end()
        res.send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }  
})

app.post("/produtos",async(req,res)=>{
    try{
        const {id,nome,descricao,preco,imagem} = req.body

        const banco = new BancoMysql();

        const sqlString = "INSERT INTO produtos VALUES (?,?,?,?,?)"
        const parametros = [id,nome,descricao,imagem]

        const result = await banco.query(sqlString,parametros)
        console.log(result)

        await banco.end()

        res.status(200).send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }  
})

app.delete("/produtos",()=>{

})
app.put("/produtos",()=>{

})


//INICIAR O SERVIDOR
app.listen(8000,()=>{
    console.log("SERVIDOR INICIADO NA PORTA 8000")
})