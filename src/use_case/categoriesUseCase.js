const categoriesModel = require("../models/categoriesModel");

const getCategories = async () => {
  try {
    const categorias = await categoriesModel.getCategories();

    return categorias;
  } catch (error) {
    throw new Error("Erro ao buscar categorias");
  }
};

module.exports = {
  getCategories,
};
