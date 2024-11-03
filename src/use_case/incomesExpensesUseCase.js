const incomesExpensesModel = require("../models/incomesExpensesModel");
const userModel = require("../models/userModel");

const createItem = async (item) => {
  try {
    await incomesExpensesModel.createItem(item);
    return true;
  } catch (error) {
    throw new Error("Erro ao criar registro de item");
  }
};

const getItemById = async (id) => {
  try {
    const item = await incomesExpensesModel.getItemById(id);
    if (!item) {
      return false
    }
    return item;
  } catch (error) {
    throw new Error("Erro ao buscar registro");
  }
};

const getCategoryById = async (id) => {
  try {
    const category = await incomesExpensesModel.getCategoryById(id);
    if (!category) {
      return false
    }
    return true;
  } catch (error) {
    throw new Error("Erro ao buscar categoria");
  }
};

const getItensByCategoryAndDateRange = async (userId, descCategoria, dataInicio, dataFim) => {
  try {
    const extratoPeriodo = await incomesExpensesModel.getItensByCategoryAndDateRange(userId, descCategoria, dataInicio, dataFim);
    return extratoPeriodo;
  } catch (error) {
    throw new Error("Erro ao buscar registros");
  }
};

const updateItem = async (idRegistro, itemData) => {
  try {
    const usuarioCadastrado = await userModel.getUserById(itemData.idUsuario);
    if (!usuarioCadastrado) {
      throw new Error("Erro ao buscar usuário");
    }
    const itemCadastrado = await getItemById(idRegistro);
    if (!itemCadastrado) {
      throw new Error("Erro ao buscar item");
    }
    const categCadastrada = await getCategoryById(itemData.idCategoria);
    if (!categCadastrada) {
      throw new Error("Erro ao buscar categoria");
    }
    return await incomesExpensesModel.updateItem(idRegistro, itemData);;
  } catch (error) {
    throw error;
  }
};

const deleteItem = async (id) => {
  try {
    const item = await getItemById(id);
    if (!item) {
      throw new Error("Registro não encontrado");
    }
    await incomesExpensesModel.deleteItem(id);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createItem,
  getItemById,
  getItensByCategoryAndDateRange,
  updateItem,
  deleteItem,
};
