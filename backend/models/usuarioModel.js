let usuarios = [];

const getAllUsuarios = () => usuarios;

const addUsuario = (novoUsuario) => {
    const usuarioComId = { id: usuarios.length + 1, ...novoUsuario };
    usuarios.push(usuarioComId);
    return usuarioComId;
};

const updateUsuario = (id, dadosAtualizados) => {
    const index = usuarios.findIndex(usuario => usuario.id === parseInt(id));
    if (index !== -1) {
        usuarios[index] = { ...usuarios[index], ...dadosAtualizados };
        return usuarios[index];
    }
    return null;
};

const deleteUsuario = (id) => {
    const index = usuarios.findIndex(usuario => usuario.id === parseInt(id));
    if (index !== -1) {
        usuarios.splice(index, 1);
        return true;
    }
    return false;
};

module.exports = {
    getAllUsuarios,
    addUsuario,
    updateUsuario,
    deleteUsuario
};
