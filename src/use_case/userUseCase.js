const userModel = require("../models/userModel");

const getUser = async (email) => {
  try {
    const usuario = await userModel.getUser(email);
    return usuario;
  } catch (error) {
    throw new Error("Erro ao buscar usuário");
  }
};

const createUser = async (usuario) => {
  try {
    await userModel.createUser(usuario);
  } catch (error) {
    throw new Error("Erro ao criar usuário");
  }
};

module.exports = {
  getUser,
  createUser,
};
