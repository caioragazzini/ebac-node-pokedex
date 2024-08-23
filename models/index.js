const moongose = require('moongose');
const pokemonSchema = require('./pokemon');

const pokemon = moongose.model('pokemon', pokemonSchema);

const connect = () => moongose.connect('mongodb://localhost:27017/pokedex');

module.export ={
    pokemon,
    connect
}

