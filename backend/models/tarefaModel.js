let tarefas = [];

const getAllTarefas = () => tarefas;

const getTarefasByUsuario = (usuario) => {
    return tarefas.filter(tarefa => tarefa.usuario === usuario);
};

const addTarefa = (novaTarefa) => {
    const tarefaComId = { id: tarefas.length + 1, ...novaTarefa };
    tarefas.push(tarefaComId);
    return tarefaComId;
};

const updateTarefa = (id, dadosAtualizados) => {
    const index = tarefas.findIndex(tarefa => tarefa.id === parseInt(id));
    if (index !== -1) {
        tarefas[index] = { ...tarefas[index], ...dadosAtualizados };
        return tarefas[index];
    }
    return null;
};

const deleteTarefa = (id) => {
    const index = tarefas.findIndex(tarefa => tarefa.id === parseInt(id));
    if (index !== -1) {
        tarefas.splice(index, 1);
        return true;
    }
    return false;
};

module.exports = { getAllTarefas, getTarefasByUsuario, addTarefa, updateTarefa, deleteTarefa };
