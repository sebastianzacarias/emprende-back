const http =  require("http")
//const name = require('./another')
//console.log({name})

function requestController() {
    // Logica de nuestra funcion
    //console.log("Recibimos una nueva request")
    //console.log({global})
    console.log("Hola Mundo")
}

// Configurar nuestro servidor
const server = http.createServer(requestController)

server.listen(4000)


