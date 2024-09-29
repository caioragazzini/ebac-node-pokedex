const express =require("express");
const {Pokemon} = require("../../models");

const router = express.Router();

router.get('/', async (req, res)=>{
    try
    {
        const filtros = req.query;
        const options = {};

        if(filtros.name){
            options.nome = {
                $regex : filtros.name + '.*',
            };
        }
        const pokemons = await Pokemon.find(options);
        res.status(200).json({
            sucesso : true,
            pokemons : pokemons,
        })

    } catch(e){
        res.status(500).json({
            sucesso: false,
            message : e,
        })
    }
});
router.post('/', async (req,res)=>{
    try{

        const pokemon = await Pokemon.create(req.body);
        res.status(201).json({
            sucesso : true,
            pokemon: pokemon,
        });

    } catch(e){
        res.status(422).json({
            sucesso : false,
            message : e,
        });
    }
});

module.exports = router;
