const express        = require ( 'express' );
const router         = express.Router();
const userController = require ( '../controllers/userController' );

//Rotas para operações CRUD
router.get   ( '/user'    , userController.listarUsuarios   );
router.post  ( '/user'    , userController.criarUsuario     );
router.put   ( '/user/:id', userController.atualizarUsuario );
router.delete( '/user/:id', userController.excluirUsuario   );

module.exports = router;

