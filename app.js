require('dotenv').config();

const express = require('express');

const passport = require('passport');
const session = require('express-session');
const createError = require('http-errors');

const {connect} = require('./models');


require('./routes/auth/');
const pokemonRouter = require('./routes/pokemons');
const batalhaRouter = require('./routes/batalha');
const autenticacaoRouter = require('./routes/auth');
const homeRouter =require('./routes/home');

const apiRouter =require('./routes/api');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const { checaAutenticado } = require('./routes/middlewares/checa-autenticacao');

const porta = 3000;
const app = express();

//configurando leitura do corpo
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//configurando a autenticação
app.use(session({
    secret:process.env.SESSION_SECRET,
    resave : false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// configurando ejs
app.set('views', path.join(__dirname, 'views') );
app.set('view engine', 'ejs');
app.use(expressLayouts);

// configurando arquivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// declarando rotas
app.use('/pokemons',checaAutenticado, pokemonRouter);
app.use('/batalha', checaAutenticado, batalhaRouter);
app.use('/auth', autenticacaoRouter);
app.use('/', checaAutenticado, homeRouter);

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