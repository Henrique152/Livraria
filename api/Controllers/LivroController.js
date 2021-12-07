'use strict'
var mongoose = require('mongoose')
var livro = mongoose.model('livro')

//get all
exports.lista_todos_os_livros = function(req, res)
{
    livro.find({}, function(err,livros)
    {
        if(err)
        {
            res.send(err)
        }
        res.json(livros)
    })
}

//Get Id
exports.lista_um_livro = function(req, res)
{
    livro.find({'_id': req.params.livroId}, function(err,livro)
    {
        if(err)
        {
            res.send(err)
        }
        res.json(livro)
    })
}

//post
exports.adiciona_um_livro = function(req, res){
    novo_livro = new livro(req.body)
    novo_livro.save (function(req, res){
        if(err)
        {
            res.send(err)
        }
        res.json(livro)
    })
}

//put
exports.atualiza_um_livro = function(req, res){
    livro.findOneAndUpdate({_id: req.params.livroId}, req.body,{new: true},
        function(req, livro) {
        if(err)
        {
            res.send(err)
        }
        res.json(livro)
    })
}

//delete
exports.remove_um_livro = function(req, res){
    livro.findOneAndUpdate({_id: req.params.livroId},
        function(req, livro) {
        if(err)
        {
            res.send(err)
        }
        res.json("Livro deletado com sucesso")
    })
}