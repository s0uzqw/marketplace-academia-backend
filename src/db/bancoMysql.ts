import mysql, { Connection } from 'mysql2/promise';

class BancoMysql {
    // Propriedade
    private conexao: Promise<Connection>;

    // Métodos
    constructor() {
        this.conexao = mysql.createConnection({
            host: process.env.dbhost ? process.env.dbhost : "localhost",
            user: process.env.dbuser ? process.env.dbuser : "root",
            password: process.env.dbpassword ? process.env.dbpassword : "",
            database: process.env.dbname ? process.env.dbname : "banco1022b",
            port: process.env.dbport ? parseInt(process.env.dbport) : 3306
        });
    }

    async query(queryString:string,params?:Array<any>) {
        const conn = await this.conexao; 
        const [result, fields] = await conn.query(queryString);
        return result;
    }

    async end() {
        const conn = await this.conexao; 
        await conn.end();
    }
}

export default BancoMysql;