const incomesExpensesUseCase = require("../use_case/incomesExpensesUseCase");

const createItem = async (req, res) => {
  try {
    await incomesExpensesUseCase.createItem(req.body);
    return res.status(201).json({ message: "Registro criado com sucesso" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

const getItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const registro = await incomesExpensesUseCase.getItemById(id);

    if (!registro) {
      return res.status(404).json({ message: "Registro não encontrado" });
    }

    return res.status(200).json({ usuario });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

const getItensByCategoryAndDateRange = async (req, res) => {
  try {
    const { id } = req.params;
    const registro = await incomesExpensesUseCase.getItensByCategoryAndDateRange(id, req.body);

    if (!registro) {
      return res.status(404).json({ message: "Registro não encontrado" });
    }

    return res.status(200).json({ registro });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

const deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    await incomesExpensesUseCase.deleteItem(id);
    return res.status(200).json({ message: "Registro deletado com sucesso" });
  } catch (error) {
    if (error.message === "Registro não encontrado") {
      return res.status(404).json({ error: error.message });
    }
    console.error(error);
    return res.status(500).json({ error: "Erro ao deletar registro" });
  }
};

const updateItem = async (req, res) => {
  const { id } = req.params;
  try {
    await incomesExpensesUseCase.updateItem(id, req.body);
    return res.status(200).json({ message: "Registro atualizado com sucesso" });
  } catch (error) {
    if (error.message === "Registro não encontrado") {
      return res.status(404).json({ error: error.message });
    } 
    console.error(error);
    return res.status(500).json({ error: "Erro ao atualizar registro" });
  }
};

module.exports = {
  createItem,
  getItemById,
  getItensByCategoryAndDateRange,
  updateItem,
  deleteItem,
};
