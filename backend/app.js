const express      = require('express');
const app          = express();
const tarefaRoutes = require( './routes/tarefaRoutes' );
const userRoutes   = require( './routes/userRoutes'   );
const PORT         = process.env.PORT || 3000;

app.use( express.json() );
app.use( '/api', tarefaRoutes );
app.use( '/api', userRoutes   );

app.listen( PORT, () => {
    console.log( `Servidor on-line na porta: ${PORT}` )
    console.log(`URL: http://localhost:${PORT}/api/tarefas`);
});

