const express          = require( 'express' );
const router           = express.Router();
const tarefaController = require( '../controllers/tarefaController' );

//Rotas para operações CRUD
/**
 * @swagger
 * tags:
 *   name: Tarefas
 *   description: Gerenciamento de tarefas
 */

/**
 * @swagger
 * /api/tarefas:
 *   get:
 *     summary: Lista todas as tarefas
 *     tags: [Tarefas]
 *     responses:
 *       200:
 *         description: Lista de tarefas retornada com sucesso
 */
router.get   ( '/tarefas'      , tarefaController.listarTarefas    );
router.get   ( '/tarefas/:user', tarefaController.listarTarefasUser );
router.post  ( '/tarefas'      , tarefaController.criarTarefa       );
router.put   ( '/tarefas/:id'  , tarefaController.atualizarTarefa   );
router.delete( '/tarefas/:id'  , tarefaController.excluirTarefa     );

module.exports = router;
