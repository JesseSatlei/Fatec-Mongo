const mongoose = require('mongoose');
const schema = mongoose.Schema({
    nome: {
        type: String, 
        require: true
    },
    formacao: {
        type: String,
    },
    endereco: {
        type: String,
    },
    telefone: {
        type: String,
        require: true
    },
    data_nascimento: {
        type: Date,
        require: true
    },
    cpf: {
        type: String,
        require: true,
        index: {
            unique: true
        }
    },
    rg: {
        type: String,
        require: true
    },
    valor_hora_aula: {
        type: Number,
        require: true,
        default: 20,
        min: 15,
        max: 50
    },
    email: {
        type: String,
        require: true,
        index: {
            unique: true
        }
    }
});
//Parâmetros de mongoose.model():
//1° -> nome do model
//2° -> estrutura de atributos do model(schema)
//3° -> nome da collection do MongoDB onde
//      os objetos desse model serão armazenados
//      (geralmente o nome da model em 
//      minúsculas e no plural)
module.exports = mongoose.model('Professor', schema, 'professores');