const express      = require('express');
const app          = express();
const tarefaRoutes = require('./routes/tarefaRoutes');
const userRoutes   = require('./routes/usuarioRoutes');
const PORT         = process.env.PORT || 3000;
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger.json');

app.use(express.json());
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use('/api', tarefaRoutes);
app.use('/api', userRoutes);

app.listen(PORT, () => {
    console.log('|------------------------------------------------|');
    console.log(`|------- Servidor on-line na porta: ${PORT} --------|`);
    console.log('|--------- Gerenciador de tarefas ---------------|');
    console.log(`| URL: http://localhost:3000/doc              |`);
    console.log('|------------------------------------------------|');
});
