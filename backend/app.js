const express = require('express');
const app     = express();
const tarefaRoutes = require( './routes/tarefaRoutes' );
const PORT    = process.env.PORT || 3000;

app.use( express.json() );
app.use('/api', tarefaRoutes );

app.listen( PORT, () => {
    console.log( `Servidor on-line na porta: ${PORT}` )
    console.log(`URL: http://localhost:${PORT}/api/tarefas`);
})

