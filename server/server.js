const express = require('express');
const socketIO = require('socket.io') //importamos socketIO
const http = require('http') //importamos el paquetehttp porque soket no trabaja directamente con express

const path = require('path');

const app = express();

let server = http.createServer(app)  //creamos el servidor

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));


module.exports.io = socketIO(server)  //inicializamos el io (input y ouput) esto mantiene la comunicacion del backend


require('./sockets/socket')  //le indico al server que tiene que utilizar la configuracion sel archivo socket


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});


//ver configuraciones en el index html (front)