const express = require("express");
const server = express();

//pegar o banco de dados
const db = require("./database/db")

//configurar pastas publicas
server.use(express.static("public"));

//utilizando template engine
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//pagina inicial
server.get("/", (req, res) => {
    return res.render("login.html", {  });
});

//consultar couples
server.get("/couples", (req, res) => {

    //pegar os dados do banco
    db.all(`SELECT * FROM couples`, function(err, rows){
       if(err){
           return console.log(err);
        }      
        const total = rows.length;

        //mostrar pg html com os dados do banco
        return res.render("login.html", { couples: rows, total });
    })
    
});

server.listen(3000);
