const mongoose = require('mongoose');

const Pokemon = new mongoose.Schema({

    id:{
        type: Number,
        require: true,
    },
    nome:{
        type: String,
        require: true,
    },
    altura:{
        type: Number,
        require: true,
    },
    peso: {
        type: Number,
        require: true,
        min:0,
    },
    imagem:{
        type: String,
        require: true,
        validate:{
            validator:  (valor)=> {

                return valor && valor.startsWith('http');

            },
            message: ()=>"a imagem deve ser uma url absoluta"
        }
    },
    ataques:{
        type: String,
        require: true,
    },
    estatisticas:{
        type: Object,
        require: true,
    },
    jogos: {
        type: [String], 
        require: true
    },
    capturadoPor :{
        type: mongoose.Schema.Types.ObjectId,
        require : true,
        ref: 'User'
    }

});

Pokemon.index({capturadoPor: 1});

module.exports = Pokemon;