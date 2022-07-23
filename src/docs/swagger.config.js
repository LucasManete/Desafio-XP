const swaggerConfig = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'DesafioXP API com Swagger',
      description: 'Api desenvolvida para o desafio técnico da XP',
      version: '1.0',
    },
    servers: [{
      url: 'http://localhost:3000',
      description: 'servidor local',
    }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./src/routes/route.js'],
};

module.exports = { swaggerConfig };
