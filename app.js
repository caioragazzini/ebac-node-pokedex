require('dotenv').config();

const express = require('express');
const createError = require('http-errors');
const {connect} = require('./models');
const pokemonRouter = require('./routes/pokemons');
const batalhaRouter = require('./routes/batalha');
const apiRouter =require('./routes/api')
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

//declarando rotas API
app.use('/api', apiRouter);

//caso não de mtch em nenhuma rota acima , tratamos erro 404
app.use((_req, _res, next) => {
    next(createError(404));
});

//tratativa de erro generica
app.use((err, _req, res, _next) =>{

    res.status(err.status || 500);
    res.render('paginas/erro', {
        mensagem: err.message,
        erro:err,
    });
});

app.listen(porta, () => {
    connect();
});