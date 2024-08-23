const express = require('express');
const {pokemon} = require('../models');

const router = express.Router();


router.get('/', (res)=>{
    pokemon.find({}).then((pokemons)=>{
        res.render('paginas/pokemons/index', {
            pokemons,
        });
    })
});

module.exports =router;