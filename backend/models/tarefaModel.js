    let tarefas = [];

    function firstRecordOfList( id ) {
        return tarefas.findIndex( tarefa => tarefa.id === parseInt( id ) );
    }        


    //Lista todas as tarefas - GET ( atualizada )
    function getAll() {
        return tarefas;
    }

    //Listar todas as tarefas de um usuario - GET ( nao atualizada )
    const listarTarefasUser = ( req, res ) => {
        const nome = req.params;

        const tarefasUser = tarefas.filter( tarefa => tarefa.usuario === nome);
        if ( tarefasUser.length > 0 ) {
            res.json( tarefasUser )
        } else {
           res.status( 400 ).json( { mensagem: 'Não a tarefas no nome desse usúario!' } ) 
        }
    }

    //Cria nova tarefa - POST ( atualizada )
    function create ( { titulo, descricao, status, usuario } ) {
        const novaTarefa ={ id: tarefas.length + 1, 
                            titulo,
                            descricao,
                            status,
                            usuario }; 

        tarefas.push( novaTarefa );
        return novaTarefa;
    };

    //Atualizar dados da tarefa - PUT ( nao atualizada )
    function putAtualizarTarefa ( id, titulo, descricao, status, usuario ) {
        const index = tarefas.findIndex( tarefa => tarefa.id === parseInt( id ) );

        if ( index !== -1 ){
            tarefas[ index ].titulo    = titulo;
            tarefas[ index ].descricao = descricao;
            tarefas[ index ].status    = status;
            tarefas[ index ].usuario   = usuario;

            return( tarefas[ index ] );
        } else {
            return ( null );// retorna erro 404 caso a tarefa não seja encontrada
        }//verificar se posso realizar retorno dessa maneira
    };

    // Atualizar status da tarefa - PATCH ( nao atualizada )
    const atualizarStatusTarefa = ( req, res ) => {
        const { id     } = req.params;
        const { status } = req.body;

        const index = tarefas.findIndex( tarefa => tarefa.id === parseInt( id ) );

        if ( index !== -1 ){
            tarefas[ index ].status = status;
            
            res.json( tarefas[ index ] );
        } else {
            res.status( 400 ).json( { mensagem: 'Tarefa não encontrada!' } );// retorna erro 404 caso a tarefa não seja encontrada
        }
    };

    //Excluir tarefa - DELETE ( nao atualizada )
    const excluirTarefa = ( req, res ) => {
        const { id } = req.params;
        const index = tarefas.findIndex( tarefa => tarefa.id === parseInt( id ));

        if ( index !== -1 ){
            tarefas.splice( index, 1 );
            res.json( { mensagem:'Tarefa excluída com sucesso'} );
        } else {
            res.status( 404 ).json( { mensagem: 'Tarefa não encontrada'});
        }
    };

module.exports = { getAll, create };
