const bcrypt = require('bcryptjs');
let usuarios = [];

const getAllUsuarios = () => usuarios;

const addUsuario = (novoUsuario) => {
    const hash = bcrypt.hashSync(novoUsuario.senha, 10);
    const usuarioComId = {
        id: usuarios.length + 1,
        nome: novoUsuario.nome,
        cargo: novoUsuario.cargo,
        senha: hash
    };
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