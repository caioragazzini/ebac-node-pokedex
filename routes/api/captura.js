const express = require('express');
const buscaInfoPokemon = require('../../services/busca-pokemon');
const { Pokemon } = require('../../models');

const router = express.Router();

router.post('/captura/:id', (req, res) => {

    buscaInfoPokemon(req.params.id).then((pokemon) =>{
        const pokemonCapturado =true;
        console.log("🚀 ~ buscaInfoPokemon ~ pokemonCapturado:", pokemonCapturado)
        if(pokemonCapturado)
        {
            Pokemon.create(pokemon).then((pokemonCapturado)=>{
                res.json({
                    capturado : true,
                    id: pokemonCapturado._id
                });
            }).catch(e => res.status(500).json({erro: e}));
        }

    }).catch(_ => res.status(400).json({erro: "Pokemon não encontrado"}));
});

module.exports = router;