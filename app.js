const express = require('express');
const {connect} = require('./models');
const pokemonRouter = require('./routes/pokemons');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const porta = 3000;

app.use('/pokemons', pokemonRouter);

app.set('views', path.join(__dirname, 'views') );
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.listen(porta, () => {
    connect();
});