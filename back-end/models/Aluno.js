const mongoose = require('mongoose');
const mongooseSeq = require('mongoose-sequence')(mongoose);

const schema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    endereco: {
        type: String,
        require: true
    },
    data_nascimento: {
        type: Date,
        require: true
    },
    telefone: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        index: {unique: true}
    },
    num_matricula: {
        type: Number,
        index: {unique: true}
    },
    cpf: {
        type: String,
        require: true,
        index: {unique: true}
    },
    rg: {
        type: String,
        require: true
    },
    turma: {
        type: mongoose.ObjectId,
        ref: 'Turma',
        require: true
    }
});
schema.plugin(mongooseSeq, {inc_field: 'num_matricula'});

module.exports = mongoose.model('Aluno', schema, 'alunos');