const db = require("../db/knex");

const createUser = async (usuario) => {
  try {
    await db("usuarios").insert({
      email: usuario.email,
      nome: usuario.nome,
      senha: usuario.senha,
    });
  } catch (error) {
    console.error("Erro ao criar usuário no banco de dados:", error);
    throw error;
  }
};

const getUserByEmail = async (email) => {
  try {
    const usuario = await db("usuarios")
      .select("*")
      .where({ email: email })
      .first();
    return usuario;
  } catch (error) {
    console.error("Erro ao buscar usuário no banco de dados:", error);
    throw error;
  }
};

const getUserById = async (id) => {
  try {
    const usuario = await db("usuarios")
      .select("*")
      .where({ id_usuario: id })
      .first();
    return usuario;
  } catch (error) {
    console.error("Erro ao buscar usuário no banco de dados:", error);
    throw error;
  }
};

const deleteUser = async (id) => {
  try {
    await db("usuarios")
      .where({ id_usuario: id })
      .delete();
    return true; // Deleção bem-sucedida
  } catch (error) {
    console.error("Erro ao deletar usuário no banco de dados:", error);
    throw error;
  }
};

const updateUser = async (id, userData) => {
  try {
    await db("usuarios")
      .where({ id_usuario: id })
      .update(userData);
    return true; // Atualização bem-sucedida
  } catch (error) {
    console.error("Erro ao atualizar usuário no banco de dados:", error);
    throw error;
  }
};

module.exports = {
  getUserByEmail,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
};
