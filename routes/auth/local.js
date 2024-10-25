const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const {Usuario} = require('../../models');
const bcrypt = require('bcrypt');

passport.use(new localStrategy({
    usernameField: 'email'
}, async(nomeDeUsuario, senha, done)=>{
    try{
        const usuario = await Usuario.findOne({email: nomeDeUsuario });
        if(!usuario){
            return done(null,false);
        }

        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);       
        if(senhaCorreta){
            return done(null, usuario);
        } else{
            return done(null, false);            
        }

    } catch(e){
        done(e, false);
    }
}));

//salva na sessão o usuario
passport.serializeUser((usuario, done)=>{
    done(null, usuario._id);
});

//recuperando da sessão o usuario
passport.deserializeUser( async(id, done)=>{
    let err, usuario;
    try{
        usuario = await Usuario.findById(id);

    } catch(err){
        err = err;
    }
    done(err, usuario);

});