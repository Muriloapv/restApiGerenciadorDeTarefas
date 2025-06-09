    let tarefas = [];

    //Lista todas as tarefas - GET
    const listarTarefas = ( req, res ) => {
        res.json( tarefas );
    };

    const listarTarefasUser = ( req, res ) => {
        const nome = req.params;

        const tarefasUser = tarefas.filter( tarefa => tarefa.usuario === nome);
        if ( tarefasUser.length > 0 ) {
            res.json( tarefasUser )
        } else {
           res.status( 400 ).json( { mensagem: 'Não a tarefas no nome desse usúario!' } ) 
        }
    }

    //Cria nova tarefa - POST
    const criarTarefa = ( req, res ) => {
        const { titulo    } = req.body;
        const { descricao } = req.body;
        const { status    } = req.body;
        const { usuario   } = req.body;

        const novaTarefa ={ id: tarefas.length + 1, 
                            titulo,
                            descricao,
                            status,
                            usuario
        }; 

        tarefas.push( novaTarefa );
        res.status( 201 ).json( novaTarefa );
    };

    //Atualizar dados da tarefa - PUT
    const atualizarTarefa = ( req, res ) => {
        const { id        } = req.params;
        const { titulo    } = req.body; 
        const { descricao } = req.body;
        const { status    } = req.body;
        const { usuario   } = req.body;

        const index = tarefas.findIndex( tarefa => tarefa.id === parseInt( id ) );

        if ( index !== -1 ){
            tarefas[ index ].titulo    = titulo;
            tarefas[ index ].descricao = descricao;
            tarefas[ index ].status    = status;
            tarefas[ index ].usuario   = usuario;

            res.json( tarefas[ index ] );
        } else {
            res.status( 400 ).json( { mensagem: 'Tarefa não encontrada!' } );// retorna erro 404 caso a tarefa não seja encontrada
        }
    };

    // Atualizar status da tarefa - PATCH
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

    //Excluir tarefa - DELETE
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

module.exports = { listarTarefas, listarTarefasUser, criarTarefa, atualizarTarefa, atualizarStatusTarefa, excluirTarefa }
