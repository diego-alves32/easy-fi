const db = require("../db/knex");

const createItem = async (item) => {
  try {
    await db("registros").insert({
      id_usuario: item.idUsuario,
      id_categoria: item.idCategoria,
      desc_registro: item.descricaoItem,
      data_fato: item.dataOcorrencia,
      valor: item.valor,
    });
  } catch (error) {
    console.error("Erro ao criar registro no banco de dados:", error);
    throw error;
  }
};

const getItemById = async (id) => {
  try {
    const usuario = await db("registros")
      .select("*")
      .where({ id_registro: id })
      .first();
    return usuario;
  } catch (error) {
    console.error("Erro ao buscar registro no banco de dados:", error);
    throw error;
  }
};

const getItensByCategoryAndDateRange = async (userId, categoryId = null, initDate, finalDate) => {
  try {
    const query = db("registros")
      .select("*")
      .where({ id_user: userId })
      .andWhere("date", ">=", initDate)
      .andWhere("date", "<=", finalDate);

    if (categoryId !== null) {
      query.andWhere({ id_category: categoryId });
    }

    return await query;
  } catch (error) {
    console.error("Erro ao buscar registros no banco de dados:", error);
    throw error;
  }
};

const updateItem = async (id, itemData) => {
  try {
    await db("registros")
      .where({ id_registro: id })
      .update(itemData);
    return true; // Atualização bem-sucedida
  } catch (error) {
    console.error("Erro ao atualizar registro no banco de dados:", error);
    throw error;
  }
};

const deleteItem = async (id) => {
  try {
    await db("registros")
      .where({ id_registro: id })
      .delete();
    return true; // Deleção bem-sucedida
  } catch (error) {
    console.error("Erro ao deletar registro no banco de dados:", error);
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
