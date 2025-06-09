const express      = require('express');
const app          = express();
const tarefaRoutes = require('./routes/tarefaRoutes');
const userRoutes   = require('./routes/userRoutes');
const PORT         = process.env.PORT || 3000;

const swaggerUi    = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Tarefas',
      version: '1.0.0',
      description: 'API documentation',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./routes/*.js'], // Procura anotações swagger aqui
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use(express.json()); 

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/api', tarefaRoutes);
app.use('/api', userRoutes);

app.listen(PORT, () => {
    console.log('|------------------------------------------------|'   );
    console.log(`|------- Servidor on-line na porta: ${PORT} --------|`);
    console.log('|'                                                    );
    console.log('|--------- Gerenciador de tarefas ---------------|'   );
    console.log(`| URL: http://localhost:${PORT}/api/tarefas         |`);
    console.log('|'                                                    );
    console.log('|------------------------------------------------|'   );
    console.log('|--------- Gerenciador de usuarios---------------|'   );
    console.log(`| URL: http://localhost:${PORT}/api/user            |`);
    console.log('|'                                                    );
    console.log('|------------------------------------------------|'   );
    console.log('|----------------- Link Swagger -----------------|'   );
    console.log(`| URL: http://localhost:${PORT}/api-docs            |`);
    console.log('|------------------------------------------------|'   );
});
