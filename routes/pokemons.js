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
            console.log("🚀 ~ Pokemon.find ~ pokemons:", pokemons)
      
    });
});

router.get('/:id',(req, res) => {
    Pokemon.findOne({_id : req.params.id}).then(pokemon => {
        res.render('paginas/pokemons/show',{
            pokemon,
            message: req.query.message,
        });
    }).catch(e => {
        res.status(404).render('paginas/erro', {
            mensagem: "Pokemon não encontrado!!",
            erro: {},
        })
    });

});

module.exports =router;