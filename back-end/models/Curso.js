const mongoose = require('mongoose');
const schema = mongoose.Schema({
    nome: {
        type: String, 
        require: true
    },
    duracao_meses: {
        type: Number,
        require: true,
        default: 6 // Maioria dos cursos dura 6 meses
    },
    carga_horario: {
        type: Number,
        require: true,
        default: 100 //Maioria dos cursos tem 100 horas
    },
    valor_total: {
        type: Number,
        require: true
    }
});
//Parâmetros de mongoose.model():
//1° -> nome do model
//2° -> estrutura de atributos do model(schema)
//3° -> nome da collection do MongoDB onde
//      os objetos desse model serão armazenados
//      (geralmente o nome da model em 
//      minúsculas e no plural)
module.exports = mongoose.model('Curso', schema, 'cursos');