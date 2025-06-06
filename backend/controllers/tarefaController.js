let tarefas = [];

//Lista todas as tarefas - GET
const listarTarefas = ( req, res ) => {
    res.json( tarefas );
};

//Cria nova tarefa - POST
const criarTarefa = ( req, res ) => {
    const { descricao } = req.body;
    const novaTarefa ={ id: tarefas.length + 1, descricao }; 

    tarefas.push( novaTarefa );
    res.status( 201 ).json( novaTarefa );
};

//Atualizar dados da tarefa - PUT
const atualizarTarefa = ( req, res ) => {
    const { id        } = req.params;
    const { descricao } = req.body;
    const index         = tarefas.findIndex( tarefa => tarefa.id === parseInt( id ) );

    if ( index !== -1 ){
        tarefas[ index ].decricao = descricao;
        res.json( tarefas[ index ] );
    } else {
        res.status( 400 ).json( { mensagem: 'Tarefa não encontrada!' } );// retorna erro 404 caso a tarefa não seja encontrada
    }
};

//Excluir tarefa - DELETE
const excluirTarefa = ( req, res ) => {
    const { id } = req.params;
    const index = tarefas.findIndex( tarefa => tarefa.id === parseInt( id ));

    if ( index !== -1 ){
        tarefas.splice( index, 1 );
        res.json( { menagem:'Tarefa excluída com sucesso'} );
    } else {
        res.status( 404 ).json( { mensagem: 'Tarefa não encontrada'});
    }
};

module.exports = { listarTarefas, criarTarefa, atualizarTarefa, excluirTarefa }
