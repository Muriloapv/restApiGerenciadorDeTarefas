const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'API de Tarefas',
    description: 'Documentação automática gerada com swagger-autogen'
  },
  host: 'localhost:3000',
  schemes: ['http']
};''

const outputFile     = './swagger_output.json';
const endpointsFiles = ['./app.js']; // ou ./routes/tarefaRoutes.js etc

swaggerAutogen(outputFile, endpointsFiles, doc);
