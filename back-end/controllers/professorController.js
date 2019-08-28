const Professor = require('../models/Professor');

const controller = {}; // Objeto vazio

controller.novo = async function(req, res){
    try {
        Professor.create(req.body);
        //HTTP 201: Created
        res.sendStatus(201).end();
    }catch(erro){
        console.error(erro);
    }
}

controller.listar = async function(req, res){
    try{
        //find() sempre retorna um VETOR
        //mesmo que vazio
        const professores = await Professor.find();
        res.send(professores);
    } catch(erro){
        console.error(erro);
        res.sendStatus(500).end();
    }
}

controller.obterUm = async function(req, res){
    const id = req.params.id;
    try{
        const professor = await Professor.findById(id);
        if(professor){
            res.send(professor);
        } else {
            //HTTP 404: Not found
            res.sendStatus(404).end();
        }
    }catch(erro){
        console.error(erro);
        res.sendStatus(500).end();
    }
}

controller.atualizar = async function(req, res){
    const id = req.body._id;
    try{
        const professor = await Professor.findByIdAndUpdate(id, req.body);
        if(professor){
            //HTTP 204: No content
            res.sendStatus(204).end();
        } else{
            res.sendStatus(404).end();
        }
    } catch(erro){
        console.error(erro);
        res.sendStatus(500).end();
    }
}

controller.excluir = async function(req, res){
    const id = req.body._id;
    try{
        const professor = await Professor.findByIdAndDelete(id);
        if(professor){
            res.sendStatus(204).end();
        } else{
            res.sendStatus(404).end();
        }
    } catch (erro){
        console.error(erro);
        res.sendStatus(500).end();
    }
}

module.exports = controller;