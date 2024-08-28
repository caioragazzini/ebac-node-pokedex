const mongoose = require('mongoose');
const pokemonSchema = require('./pokemon');

const pokemon = mongoose.model('pokemon', pokemonSchema);

const connect = () => {
    mongoose.connect('mongodb://localhost:27017/pokedex')
};

module.exports ={
    pokemon,
    connect,
}

