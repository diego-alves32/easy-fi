const userModel = require("../models/userModel");

const createUser = async (usuario) => {
  try {
    const emailCadastrado = await getUserByEmail(usuario.email);
    if (emailCadastrado) {
      return false;
    }
    await userModel.createUser(usuario);
    return true;
  } catch (error) {
    throw new Error("Erro ao criar usuário");
  }
};

const getUserByEmail = async (email) => {
  try {
    const usuario = await userModel.getUserByEmail(email);
    return usuario;
  } catch (error) {
    throw new Error("Erro ao buscar usuário");
  }
};

const getUserById = async (id) => {
  try {
    const usuario = await userModel.getUserById(id);
    if (!usuario) {
      return false
    }
    return usuario;
  } catch (error) {
    throw new Error("Erro ao buscar usuário");
  }
};

const deleteUser = async (id) => {
  try {
    const user = await getUserById(id);
    if (!user) {
      throw new Error("Usuário não encontrado");
    }
    
    const userExists = await userModel.deleteUser(id);
    if (!userExists) {
      return false;
    }
  } catch (error) {
    throw error;
  }
};

const updateUser = async (id, userData) => {
  try {
    const user = await getUserById(id);
    if (!user) {
      throw new Error("Usuário não encontrado");
    }
    
    const emailCadastrado = await getUserByEmail(userData.email);
    if (emailCadastrado) {
      if (emailCadastrado.id == id) {
        throw new Error("E-mail já cadastrado no sistema por outro usuário");
      }
    }
    
    const userAtualizado = await userModel.updateUser(id, userData);
    return userAtualizado;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getUserByEmail,
  getUserById,
  createUser,
  deleteUser,
  updateUser
};
