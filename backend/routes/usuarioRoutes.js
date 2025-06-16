const express = require('express');
const router = express.Router();
const userController = require('../controllers/usuarioController');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const usuarioModel = require('../models/usuarioModel');

router.get('/usuarios', userController.listarUsuarios);
router.post('/usuarios', userController.criarUsuario);
router.put('/usuarios/:id', userController.atualizarUsuario);
router.delete('/usuarios/:id', userController.excluirUsuario);

// Rota de login
router.post('/login', (req, res) => {
    const { nome, senha } = req.body;
    const usuario = usuarioModel.getAllUsuarios().find(u => u.nome === nome);

    if (!usuario) return res.status(401).json({ mensagem: 'Usuário não encontrado' });

    const senhaValida = bcrypt.compareSync(senha, usuario.senha);
    if (!senhaValida) return res.status(401).json({ mensagem: 'Senha inválida' });

    const token = jwt.sign({ id: usuario.id, nome: usuario.nome }, 'segredo123', { expiresIn: '1h' });

    res.json({ token });
    // #swagger.tags = ['Login - Register']

});

module.exports = router;