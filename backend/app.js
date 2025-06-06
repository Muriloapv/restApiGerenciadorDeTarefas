const express = require('express');
const app     = express();
const PORT    = process.env.PORT || 3000;

app.get('/', ( req, res ) => {
    res.send('Bem vindo a api de tarefas')
})

app.listen( PORT, () => {
    console.log( `Servidor on-line na porta: ${PORT}` )
    console.log(`URL: http://localhost:${PORT}`);
})