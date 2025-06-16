const usuarioModel = require('../models/usuarioModel');

// GET /usuarios
const listarUsuarios = (req, res) => {
    const usuarios = usuarioModel.getAllUsuarios();
    res.json(usuarios);
    // #swagger.tags = ['Users']
};

// POST /usuarios
const criarUsuario = (req, res) => {
    const { nome, cargo, senha } = req.body;
    const novoUsuario = usuarioModel.addUsuario({ nome, cargo, senha });
    res.status(201).json(novoUsuario);
    // #swagger.tags = ['Login - Register']
};

// PUT /usuarios/:id
const atualizarUsuario = (req, res) => {
    const { id } = req.params;
    const { nome, cargo } = req.body;

    const usuarioAtualizado = usuarioModel.updateUsuario(id, { nome, cargo });

    if (usuarioAtualizado) {
        res.json(usuarioAtualizado);
    } else {
        res.status(400).json({ mensagem: 'Usuário não encontrado' });
    }
    // #swagger.tags = ['Users']
};

// DELETE /usuarios/:id
const excluirUsuario = (req, res) => {
    const { id } = req.params;

    if (usuarioModel.deleteUsuario(id)) {
        res.json({ mensagem: 'Usuário deletado com sucesso' });
    } else {
        res.status(404).json({ mensagem: 'Usuário não encontrado' });
    }
    // #swagger.tags = ['Users']
};

module.exports = { listarUsuarios, criarUsuario, atualizarUsuario, excluirUsuario };
