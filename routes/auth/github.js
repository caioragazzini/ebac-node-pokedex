const passport = require('passport');
const  GitHubStrategy  = require('passport-github2').Strategy;
const { Usuario } = require('../../models');
const crypto = require('crypto');


passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_OAUTH_CLIENT_ID,
        clientSecret: process.env.GITHUB_OAUTH_CLIENT_SECRET,
        callbackURL: process.env.GITHUB_OAUTH_REDIRECT_URI,
        scope: ['user:email'], // Garante que o escopo inclua email
        state: true,
      },
      async (_accessToken, _refreshToken, perfil, done) => {
        try {
          // Garante que o email esteja disponível
          const emailInfo = perfil.emails?.[0]?.value;
          if (!emailInfo) {
            return done(new Error('Não foi possível obter o email do perfil do GitHub'), null);
          }
  
          // Tenta encontrar o usuário pelo email
          let usuario = await Usuario.findOneAndUpdate(
            { email: emailInfo },
            { gitHubUsuarioId: perfil.id }
          );
  
          console.log('Usuário encontrado:', usuario);
  
          // Se o usuário não existir, cria um novo com os dados do GitHub
          if (!usuario) {
            usuario = await Usuario.create({
              gitHubUsuarioId: perfil.id,
              nome: perfil.displayName || perfil.username,
              email: emailInfo,
              senha: crypto.randomBytes(48).toString('hex'),
            });
          }
  
          // Retorna o usuário encontrado ou criado
          return done(null, usuario);
        } catch (err) {
          console.error('Erro ao verificar/atualizar usuário:', err);
          return done(err, null);
        }
      }
    )
  );
// Desserializar o usuário da sessão
passport.deserializeUser(async (id, done) => {
    try {
        const usuario = await Usuario.findById(id);
        done(null, usuario);
    } catch (err) {
        done(err, null);
    }
});
