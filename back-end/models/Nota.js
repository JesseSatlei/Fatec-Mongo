const mongoose = require('mongoose');
const schema = mongoose.Schema({
   valor: {
       type: Number,
       min: 0,
       max: 10,
       require: true
   },
   avaliacao: {
       type: mongoose.ObjectId,
       ref: 'Avaliacao',
       require: true
   },
   aluno: {
       type: mongoose.ObjectId,
       ref: 'Aluno',
       require: true
   }
}); 
module.exports = mongoose.model('Nota', schema, 'notas');