const express = require('express');
const passport = require('passport');

const { checaAutenticado, checaNaoAutenticado } = require('./middlewares/checa-autenticacao');

const router = express.Router();

router.get('/', checaNaoAutenticado,  (req, res)=>{
    res.render('paginas/login',{error : req.query.erroNoLogin});
});

router.get('/logout', checaAutenticado, async (req, res, next)=>{
    req.logout(req.user , (err)=> {
        if(!err){
            return res.redirect('/auth');
        } else{
            next(err);
        }
    });    
});

router.post('/', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth?erroNoLogin=true'
}));

// Autenticação com Google
router.get('/google', checaNaoAutenticado, passport.authenticate('google'));

router.get('/oauth2/redirect/google',checaNaoAutenticado, passport.authenticate('google',{
    failureRedirect: '/auth',
    failureMessage: true    
}),(_req, res)=> {
    res.redirect('/');
});

// Rota de login pelo GitHub
router.get('/github', passport.authenticate('github', {
    scope: ['user:email']
}));

// Rota de callback após a autenticação do GitHub
router.get('/oauth2/redirect/github', 
    passport.authenticate('github', { failureRedirect: '/login' }),
    (req, res) => {
        res.redirect('/auth');
    }
);

module.exports = router;