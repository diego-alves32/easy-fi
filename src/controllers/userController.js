const userUseCase = require("../use_case/userUseCase");

const createUser = async (req, res) => {
  try {
    await userUseCase.createUser(req.body);
    return res.status(201).json({ message: "Usuário criado com sucesso" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const { email } = req.params;
    const usuario = await userUseCase.getUser(email);

    if (!usuario) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    return res.status(200).json({ usuario });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await userUseCase.getUserById(id);

    if (!usuario) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    return res.status(200).json({ usuario });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};


const deleteUser = async (req, res) => {
  try {
    await userUseCase.deleteUser(req.params.id);
    return res.status(200).json({ message: "Usuário deletado com sucesso" });
  } catch (error) {
    if (error.message === "Usuário não encontrado") {
      return res.status(404).json({ error: error.message });
    }
    console.error(error);
    return res.status(500).json({ error: "Erro ao deletar usuário" });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const userData = req.body;

  try {
    await userUseCase.updateUser(id, userData);
    return res.status(200).json({ message: "Usuário atualizado com sucesso" });
  } catch (error) {
    if (error.message === "Usuário não encontrado") {
      return res.status(404).json({ error: error.message });
    } 
    else if (error.message === "E-mail já cadastrado") {
      return res.status(404).json({ error: error.message });
    }
    console.error(error);
    return res.status(500).json({ error: "Erro ao atualizar usuário" });
  }
};

module.exports = {
  getUser,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
};
