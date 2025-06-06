    let usuarios = [];

    // listar todos os usuarios e sua tarefa
    const listarUsuarios = (req, res) => {
        res.json(usuarios);
    };

    // criar novo usuario - POST
    const criarUsuario = ( req, res ) => {
        const { nome  } = req.body;
        const { cargo } = req.body;

        const novoUsuario = { id: usuarios.length +1,
                            nome,
                            cargo
        };

        usuarios.push( novoUsuario );
        res.status( 201 ).json( novoUsuario );
    }

    // Atualizar dados do usuario - PUT
    const atualizarUsuario = ( req, res ) => {
        const { id    } = req.paramns;
        const { nome  } = req.body;
        const { cargo } = req.body;

        const index = usuarios.findIndex( usuarios => usuarios.id === paseInt ( id ));

        if ( index !== -1 ){
            tarefas[ index ].nome  = nome;
            tarefas[ index ].cargo = cargo;

            res.json( usuarios[ index ]);
        } else {
            res.status( 400 ).json({ mensagem: 'Usúario não encontrado' });
        }
    }

    // Excluir usuario - DELETE
    const excluirUsuario = ( req, res ) => {
        const { id } = req.params;
        const index = usuarios.findIndex( usuarios => usuarios.id === parseInt( id ));

        if ( index !== -1 ){
            usuarios.splice( index, 1 );
            res. json({ mensagem: 'Usúario deletado com sucesso '})
        } else {
            res.status( 404 ).json({ mensagem: 'Usuario não encontrado '});
        }
    }

module.exports = { listarUsuarios, criarUsuario, atualizarUsuario, excluirUsuario }

