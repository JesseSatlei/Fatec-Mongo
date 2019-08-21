const mongoose = require('mongoose');
//URI = Universal Resource Identifier
module.exports = function(uri){
    mongoose.connect(uri, {
        useNewUrlParser: true,
    });
    mongoose.connection.on('connected', function(){
        console.log('Mongoose! conectado a ' + uri);
    });
    mongoose.connection.on('disconnected', function(){
        console.log('* Mongoose! desconectado de ' + uri);
    });
    mongoose.connection.on('error', function(error){
        console.log('* Mongoose! Erro: ' + error);
    });
    //Capturamos um sinal de encerramento (SIGINT), Ctrl+C
    process.on('SIGINT', function(){
        mongoose.connection.close(function(){
            console.log('* Mongoose! Desconectado pelo término da aplicação');
            //0 significa que o processo finalizou sem erros
            process.exit(0);
        });
    });
}

