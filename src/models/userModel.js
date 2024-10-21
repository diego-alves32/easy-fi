const db = require("../db/knex");

const getUser = async (email) => {
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

module.exports = {
  getUser,
  createUser,
};
