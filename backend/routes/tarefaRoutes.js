const express          = require('express');
const router           = express.Router();
const tarefaController = require('../controllers/tarefaController');
const autenticar       = require('../middleware/auth');

router.get   ('/tarefas', autenticar, tarefaController.listarTarefas);
router.get   ('/tarefas/:usuario', autenticar, tarefaController.listarTarefasUser);
router.post  ('/tarefas', autenticar, tarefaController.criarTarefa);
router.put   ('/tarefas/:id', autenticar, tarefaController.atualizarTarefa);
router.delete('/tarefas/:id', autenticar, tarefaController.excluirTarefa);

module.exports = router;