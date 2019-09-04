const mongoose = require('mongoose');
const schema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    dia_semana: {
        type: String,
        require: true,
        //O atributo somente pode receber um dos valores da enum
        enum: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb']
    },
    horario_inicial: {
        type: Date,
        require: true
    },
    horario_final: {
        type: Date,
        require: true
    },
    data_inicial: {
        type: Date,
        require: true
    },
    data_final: {
        type: Date,
        require: true
    },
    professor: {
        //ref: nome da model (por isso inicial maiúscula) referenciado pelo atributo
        type: mongoose.ObjectId, 
        ref: 'Professor',
        require: true
    },
    curso: {
        type: mongoose.ObjectId, 
        ref: 'Curso',
        require: true
    }
}); 
module.exports = mongoose.model('Turma', schema, 'turmas');