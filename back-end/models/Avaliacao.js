const mongoose = require('mongoose');
const schema = mongoose.Schema({
    data_hora: {
        type: Date,
        require: true
    },
    conteudo: {
        type: String,
        require: true,
    },
    duracao_horas: {
        type: Number,
        require: true,
        default: 1
    },
    turma: {
        type: mongoose.ObjectId,
        ref: "Turma",
        require: true
    }
}); 
module.exports = mongoose.model('Avaliacao', schema, 'avaliacoes');