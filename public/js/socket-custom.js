var socket = io()  //los socket.on son para escuchar, los socket.emit son para emitir mensajes al servidor  

//funcion que idica que hay una conexion con el servidor
socket.on('connect', function(){
    console.log('conectado al servidor');
})


//reconocer cuando hay una desconexion
socket.on('disconnect', function(){
    console.log('conexion con el servidor perdida');
})



socket.on('enviarMensaje', function(mensaje){
    console.log(mensaje);
})


//comunicacion del front al back (el back tiene que ser configurado para que escuche el mensaje 'enviarMensaje')

socket.emit('enviarMensaje', {
    usuario: 'Pablo',
    mensaje: 'hola mundo'
}, function(respuesta){
    console.log(respuesta);  //el tercer argumento es un callback disparado cuando se envio el mensaje correctamente
})