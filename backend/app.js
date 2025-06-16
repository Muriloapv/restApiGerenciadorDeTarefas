const express      = require('express');
const app          = express();
const tarefaRoutes = require('./routes/tarefaRoutes');
const userRoutes   = require('./routes/userRoutes'); // nome do arquivo correto
const PORT         = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', tarefaRoutes);
app.use('/api', userRoutes  );

app.listen(PORT, () => {
    console.log('|------------------------------------------------|');
    console.log(`|------- Servidor on-line na porta: ${PORT} --------|`);
    console.log('|--------- Gerenciador de tarefas ---------------|');
    console.log(`| URL: http://localhost:${PORT}/api/tarefas         |`);
    console.log('|------------------------------------------------|');
    console.log('|--------- Gerenciador de usuários --------------|');
    console.log(`| URL: http://localhost:${PORT}/api/usuarios        |`);
});
