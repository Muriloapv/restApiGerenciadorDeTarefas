const express = require ( 'express' );
const router = express.Router();
const userController = require('../controllers/usuarioController');


//Rotas para operações CRUD
router.get    ( '/usuarios'    , userController.listarUsuarios   );
router.post   ( '/usuarios'    , userController.criarUsuario     );
router.put    ( '/usuarios/:id', userController.atualizarUsuario );
router.delete ( '/usuarios/:id', userController.excluirUsuario   );

module.exports = router;


