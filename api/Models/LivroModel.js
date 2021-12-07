'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

let livroSchema = Schema ({
    titulo : {
        type : String
    },
    autor : {
        type : String
    }
})

module.exports = mongoose.model('livro', livroSchema)