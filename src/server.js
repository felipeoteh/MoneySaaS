const express = require("express");
const server = express();

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

server.listen(3000);
