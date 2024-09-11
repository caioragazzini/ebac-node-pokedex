const express = require('express');
const { Pokemon } = require('../models');

const router = express.Router();


router.get('/', (_req , res)=>{
    Pokemon.find().then((pokemons)=>{
        pokemons.forEach(pokemon =>{
            const dataIso = pokemon._id.getTimestamp().toISOString();
            const datainfo = dataIso.split('T')[0];
            const dataCaptura= datainfo.split('-');
            pokemon.capturadoEm =  `${dataCaptura[2]}/${dataCaptura[1]}/${dataCaptura[0]}`
        })
        res.render('paginas/pokemons/index', {
            pokemons,
        });
      
    });
});

module.exports =router;