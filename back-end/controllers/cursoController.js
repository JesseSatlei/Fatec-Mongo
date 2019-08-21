const Curso = require('../models/Curso');

const controller = {}; // Objeto vazio

controller.novo = async function(req, res){
    try {
        Curso.create(req.body);
        //HTTP 201: Created
        res.sendStatus(201).end();
    }catch(erro){
        console.error(erro);
    }
    
}

module.exports = controller;