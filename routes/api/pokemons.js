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
        if (filtros.minWeight) {
            options.peso = { $gte: Number(filtros.minWeight) }; 
        }        
      
        if (filtros.minHeight) {
            options.altura = { $gte: Number(filtros.minHeight) }; 
        }

        const pokemons = await Pokemon.find(options);
        
        res.status(200).json({
            success : true,
            pokemons : pokemons,
        })

    } catch(e){
        res.status(500).json({
            success
: false,
            message : e,
        })
    }
});

router.get('/:id', async (req,res)=>{
    try{
        const pokemon = await Pokemon.findOne({_id : req.params.id});
        res.json({
            pokemon,
            success
: true,
        })

    }catch(e){
        res.status(404).json({

            success
: false,
            erro:'Pokemon não encontrado',

        })

    }
});

router.post('/', async (req,res)=>{
    try{

        const pokemon = await Pokemon.create(req.body);
        res.status(201).json({
            success
 : true,
            pokemon: pokemon,
        });

    } catch(e){
        res.status(422).json({
            success
 : false,
            message : e,
        });
    }
});

router.patch('/:id', async(req,res)=> {
    try{
        const pokemon = await Pokemon.findOne({_id: req.params.id});

        Object.keys(req.body).forEach((atributo)=> {

            pokemon[atributo] = req.body[atributo];

        });

        await pokemon.save();
        res.json({
            success: true,
            pokemon:pokemon,
        });

    }catch(e)
    {
        res.status(422).json({
            success: false,
            erro: e,
        });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const pokemon = await Pokemon.findOneAndDelete({ _id: req.params.id });
        
        if (!pokemon) {
            return res.status(404).json({
                success: false,
                erro: 'Pokemon não encontrado',
            });
        }

        res.json({
            success: true,
            message: 'Pokemon deletado com sucesso',
        });

    } catch (e) {
        res.status(400).json({
            success: false,
            erro: e.message,
        });
    }
});


module.exports = router;