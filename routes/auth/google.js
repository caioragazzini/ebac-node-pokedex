const passport = require('passport');
const  {OAuth2Strategy}  = require('passport-google-oauth');
const { Usuario } = require('../../models');
const crypto = require('crypto');

passport.use(
    new OAuth2Strategy(
      {
        clientID: process.env.GOOGLE_OAUTH_CLIENT_ID,
        clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_OAUTH_REDIRECT_URI,
        scope: ['profile', 'email'], 
        state: true,
      },
      async (_accessToken, _refreshToken, perfil, done) => {
            const usuarioEmail =  perfil.emails[0].value;
        try {
         
            let usuario = await Usuario.findOneAndUpdate(
            { email: usuarioEmail },
            { googleUsuarioId: perfil.id }
          );

          if (!usuario) {
            usuario = await Usuario.create({
             email: usuarioEmail,
             googleUsuarioId: perfil.id,   
             nome: perfil.displayName,                                        
             senha: (await crypto.randomBytes(48)).toString('hex')

            });
          }

          done(null, usuario);
        } catch (err) {
        
          done(err, null);
        }

      }));