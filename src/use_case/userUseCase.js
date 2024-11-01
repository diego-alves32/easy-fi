const userModel = require("../models/userModel");

const createUser = async (usuario) => {
  try {
    await userModel.createUser(usuario);
  } catch (error) {
    throw new Error("Erro ao criar usuário");
  }
};

const getUser = async (email) => {
  try {
    const usuario = await userModel.getUser(email);
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
    
    const emailCadastrado = await getUser(userData.email);
    if (emailCadastrado) {
      throw new Error("E-mail já cadastrado");
    }
    
    const userAtualizado = await userModel.updateUser(id, userData);
    return userAtualizado;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getUser,
  getUserById,
  createUser,
  deleteUser,
  updateUser
};
