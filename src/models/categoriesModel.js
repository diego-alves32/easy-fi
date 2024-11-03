const db = require("../db/knex");

const getCategories = async () => {
  try {
    const categorias = await db("categorias").select("*");

    return categorias;
  } catch (error) {
    console.error("Erro ao buscar categorias no banco de dados:", error);
    throw error;
  }
};

module.exports = {
  getCategories,
};
