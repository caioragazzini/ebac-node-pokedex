const express = require('express');
const buscaInfoPokemon = require('../../services/busca-pokemon');
const { Pokemon } = require('../../models');

const router = express.Router();

router.post('/captura/:id', async (req, res) => {

    try{
        const pokemon = await buscaInfoPokemon(req.params.id);
        const pokemonCapturado =true;
       // console.log("🚀 ~ buscaInfoPokemon ~ pokemonCapturado:", pokemon)
        if(pokemonCapturado)
        {
            try {
                const pokemonCapturado = await Pokemon.create(pokemon);
                res.json({
                    capturado: true,
                    id: pokemonCapturado._id
                });
            } catch (e) {
                res.status(500).json({ erro: e });
            }
        }
    } catch (e) {
        res.status(404).render('paginas/erro', {
            mensagem: "Pokemon não Capturado!!",
            erro:{}
        })
     }    
   
});


module.exports = router;