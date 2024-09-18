const express =require('express');
const buscaInfoPokemon =require('../services/busca-pokemon');

const router = express.Router();

router.get('/', (_req, res) => {
    const pokemonRandon = Math.round(Math.random() * 904 + 1);
    console.log("🚀 ~ router.get ~ pokemonRandon:", pokemonRandon)

    buscaInfoPokemon(pokemonRandon).then(pokemon => {
        res.render('paginas/batalha/index', {
            pokemon,
        });

    });

    
});

module.exports = router;