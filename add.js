const express = require('express');
const { connect }= require('./models');
const pokemonRouter = require('./router/pokemon');

const app = express();

app.use('/pokemons', pokemonRouter);

app.listen(3000, ()=>{
    connect();

});