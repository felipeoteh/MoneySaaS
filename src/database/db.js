//importar banco
const sqlite3 = require("sqlite3").verbose();

//criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db");

module.exports = db;

//utilizar o objeto de dados para nossas operações
//db.serialize(() =>{
    //criar uma tabela com comandos sql
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS couples (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         name TEXT,
    //         idHusband INTEGER,
    //         idWife INTEGER,
    //         date TEXT
    //     );
    // `)

    // //inserir dados na tabela
    // const query = `
    //     INSERT INTO couples (
    //         name,
    //         idHusband,
    //         idWife,
    //         date
    //     ) VALUES (?,?,?,?);
    // `
    // const values = [
    //     "Navarro",
    //     "3",
    //     "4",
    //     "12/01/2021"
    // ]

    // function afterInsertData(err){
    //     if(err){
    //         return console.log(err);
    //     }
    //     console.log("Couple Cadastrado com Sucesso");
    //     console.log(this);
    // }

    // db.run(query, values, afterInsertData);

    // consultar os dados da tabela
    // db.all(`SELECT * FROM couples`, function(err, rows){
    //    if(err){
    //        return console.log(err);
    //     }
    //     console.log("Aqui estão seus Registros");
    //     console.log(rows);
    // })

    //deletar os dados da tabela
    //db.run(`DELETE FROM couples WHERE id = ?`, [1], function(err){
    //    if(err){
    //        return console.log(err);
    //    }
    //    console.log("Registro deletado com sucesso");        
    //})

    //editar os dados da tabela
//});