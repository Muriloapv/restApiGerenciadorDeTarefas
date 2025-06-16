const tarefaModel = require('../models/tarefaModel');

// GET /tarefas
const listarTarefas = (req, res) => {
    const tarefas = tarefaModel.getAllTarefas();
    res.json(tarefas);
};

// GET /tarefas/:usuario
const listarTarefasUser = (req, res) => {
    const { usuario } = req.params;
    const tarefasUser = tarefaModel.getTarefasByUsuario(usuario);

    if (tarefasUser.length > 0) {
        res.json(tarefasUser);
    } else {
        res.status(400).json({ mensagem: 'Não há tarefas com esse nome de usuário!' });
    }
};

// POST /tarefas
const criarTarefa = (req, res) => {
    const { titulo, descricao, status, usuario } = req.body;
    const novaTarefa = tarefaModel.addTarefa({ titulo, descricao, status, usuario });
    res.status(201).json(novaTarefa);
};

// PUT /tarefas/:id
const atualizarTarefa = (req, res) => {
    const { id } = req.params;
    const { titulo, descricao, status, usuario } = req.body;

    const tarefaAtualizada = tarefaModel.updateTarefa(id, { titulo, descricao, status, usuario });

    if (tarefaAtualizada) {
        res.json(tarefaAtualizada);
    } else {
        res.status(400).json({ mensagem: 'Tarefa não encontrada!' });
    }
};

// DELETE /tarefas/:id
const excluirTarefa = (req, res) => {
    const { id } = req.params;

    if (tarefaModel.deleteTarefa(id)) {
        res.json({ mensagem: 'Tarefa excluída com sucesso' });
    } else {
        res.status(404).json({ mensagem: 'Tarefa não encontrada' });
    }
};

module.exports = {
    listarTarefas,
    listarTarefasUser,
    criarTarefa,
    atualizarTarefa,
    excluirTarefa
};
