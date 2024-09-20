const express =require('express');
const buscaInfoPokemon =require('../services/busca-pokemon');

const router = express.Router();

router.get('/', async (_req, res) => {
    try{
        const pokemonRandon = Math.round(Math.random() * 904 + 1);   

    const pokemon = await buscaInfoPokemon(pokemonRandon);  
        res.render('paginas/batalha/index', {
            pokemon,
        });

    } catch(e){
        res.status(404).render('paginas/erro', {
            mensagem: "Pokemon não Capturado!!",
            erro:{}
        })
     }       
});

module.exports = router;