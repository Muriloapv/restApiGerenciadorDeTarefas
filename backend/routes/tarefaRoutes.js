const express          = require( 'express' );
const router           = express.Router();
const tarefaController = require( '../controllers/tarefaController' );

//Rotas para operações CRUD
router.get   ( '/tarefas'      , tarefaController.listarTarefas         );
router.get   ( '/tarefas/:user', tarefaController.listarTarefasUser     );
router.post  ( '/tarefas'      , tarefaController.criarTarefa           );
router.put   ( '/tarefas/:id'  , tarefaController.atualizarTarefa       );
router.patch ( '/tarefas/:id'  , tarefaController.atualizarStatusTarefa );
router.delete( '/tarefas/:id'  , tarefaController.excluirTarefa         );

module.exports = router;
