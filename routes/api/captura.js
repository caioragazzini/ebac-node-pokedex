const express = require('express');
const buscaInfoPokemon = require('../../services/busca-pokemon');
const { Pokemon } = require('../../models');

const router = express.Router();

router.post('/:id', async (req, res) => {

    try{
        const pokemon = await buscaInfoPokemon(req.params.id);
        const pokemonCapturado =true;
     
        if(pokemonCapturado)
        {
            try {
                const pokemonCapturado = await Pokemon.create({
                    ...pokemon,
                    ...{ capturadoPor : req.usuario._id, }
                
                });
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