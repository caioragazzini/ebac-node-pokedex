const express = require('express');
const {connect} = require('./models');
const pokemonRouter = require('./routes/pokemons');
const batalhaRouter = require('./routes/batalha');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const porta = 3000;

// configurando ejs
app.set('views', path.join(__dirname, 'views') );
app.set('view engine', 'ejs');
app.use(expressLayouts);

// configurando arquivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// declarando rotas
app.use('/pokemons', pokemonRouter);
app.use('/batalha', batalhaRouter);

app.listen(porta, () => {
    connect();
});