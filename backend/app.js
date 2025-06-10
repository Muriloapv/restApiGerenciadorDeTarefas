const express      = require('express');
const app          = express();
const tarefaRoutes = require('./routes/tarefaRoutes');
const userRoutes   = require('./routes/userRoutes');
const PORT         = process.env.PORT || 3000;

const swaggerUi    = require('swagger-ui-express');
const swaggerFile  = require('./swagger_output.json'); // o arquivo gerado


app.use(express.json()); 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
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
