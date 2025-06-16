// swagger.js
const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger.json'; // nome do arquivo gerado
const endpointsFiles = ['./app.js']; // ponto de entrada do seu app

const doc = {
  info: {
    title: 'API de Tarefas com JWT',
    description: 'Documentação gerada automaticamente pela aplicação',
  },
  host: 'localhost:3000',
  schemes: ['http'],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  security: [{ bearerAuth: [] }],
};

swaggerAutogen(outputFile, endpointsFiles, doc);
