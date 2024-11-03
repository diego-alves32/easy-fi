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
    return true;
  } catch (error) {
    console.error("Erro ao criar registro no banco de dados:", error);
    throw error;
  }
};

const getItemById = async (id) => {
  try {
    const item = await db("registros")
      .select("*")
      .where({ id_registro: id })
      .first();
    return item;
  } catch (error) {
    console.error("Erro ao buscar registro no banco de dados:", error);
    throw error;
  }
};

const getCategoryById = async (id) => {
  try {
    const categoria = await db("categorias")
      .select("*")
      .where({ id_categoria: id })
      .first();
    return categoria;
  } catch (error) {
    console.error("Erro ao buscar categoria no banco de dados:", error);
    throw error;
  }
};

const getItensByCategoryAndDateRange = async (userId, descCategoria, dataInicio, dataFim) => {
  try {
    const query = db("registros")
    .select("registros.*")
    .where("id_usuario", userId)
    .join("categorias", "registros.id_categoria", "=", "categorias.id_categoria")
    .andWhere("registros.data_fato", ">=", dataInicio)
    .andWhere("registros.data_fato", "<=", dataFim);
  
  if (descCategoria !== "todas") {
    query.andWhere("categorias.desc_categoria", descCategoria);
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
      .update({ 
        id_usuario: itemData.idUsuario,
        id_categoria: itemData.idCategoria,
        desc_registro: itemData.descricaoItem,
        data_fato: itemData.dataOcorrencia,
        valor: itemData.valor
      });
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
  getCategoryById,
  getItensByCategoryAndDateRange,
  updateItem,
  deleteItem,
};
