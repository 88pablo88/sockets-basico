
const {io} = require('../server')  //import  el objeto io definido en server

//para saber cuando un usuario de conecta con el servidor

io.on('connection', (client)=>{
    console.log('usuario conectado');

    client.emit('enviarMensaje', {  //emitimos un mensaje del servidor al cliente (hay que configurar al cliete para que escuche el evento 'enviarMensaje')
        usuario: 'Administrador',
        mensaje: 'bienvenido a esta aplicacion'
    })


    client.on('disconnect', ()=>{   //evento para saber si el cliente se desconecto, en el back este evento esta dentro del metodo "on(connection, (client))"

        console.log('usuario desconectado');
        
    })

    client.on('enviarMensaje', (data, callback)=>{  //se configura el servidor para escuchar el evento enviarMensaje enviado por el front
         console.log(data);

         client.broadcast.emit('enviarMensaje', data)
         
         //el segundo parametro callback (nombre opcional) es una funcion callback que se dispara cuando se recibe el mensaje para que el front tenga la confirmacion
       /* if(mensaje.usuario){
            callback({respuesta:'todo salio bien!'})   
        }   
      
        else{
            callback({respuesta:'todo salio mal!!!'})
        }*/ 
    } )

})