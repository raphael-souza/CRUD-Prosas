// necessario para que o browser libere o acesso a api resolvendo o problema de CORS
const proxy = [
    {
      context: '/api',
      target: 'http://localhost:3000',
     // pathRewrite: { '^/api': '' }
    }
  ];
  module.exports = proxy;