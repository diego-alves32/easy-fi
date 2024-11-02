const incomesExpensesModel = require("../models/incomesExpensesModel");

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
    if (!registro) {
      return false
    }
    return item;
  } catch (error) {
    throw new Error("Erro ao buscar registro");
  }
};

const getItensByCategoryAndDateRange = async (itemData) => {
  try {
    const { userId } = itemData.userId; 
    const { categoryId } = itemData.userId; 
    const { initDate } = itemData.initDate; 
    const { finalDate } = itemData.finalDate; 
    const item = await incomesExpensesModel.getItensByCategoryAndDateRange(userId, categoryId, initDate, finalDate);
    return item;
  } catch (error) {
    throw new Error("Erro ao buscar registros");
  }
};

const updateItem = async (id, itemData) => {
  try {    
    return await incomesExpensesModel.updateItem(id, itemData);;
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
