const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {Usuario} = require('../../models');

const router = express.Route();

router.post('/', async (req,res)=> {
    try{
        const usuario = Usuario.findOne({email: req.params.email});

        const senhaEstaCorreta = await bcrypt.compare(req.body.senha, usuario?.senha || '');

        if(senhaEstaCorreta){
            res.json({
                sucess :true,
                jwt: jwt.sign({ 

                    email : usuario.email,
                }, process.env.SEREDO_JWT)
            });
        } else{
            res.status(401).json({
                success : false,
                erro :'Usuario ou senha invalidos'
            })
        }
        
    }
    catch(e){
        res.status(500).json({
            success: false,
            erro: e,
        })
    }
});

module.exports = router;