const userUseCase = require("../use_case/userUseCase");

const createUser = async (req, res) => {
  try {
    const userCriado = await userUseCase.createUser(req.body);
    if (!userCriado) {
      return res
        .status(404)
        .json({ message: "E-mail já cadastrado no sistema" });
    }
    return res.status(201).json({ message: "Usuário criado com sucesso" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

const getUserByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const usuario = await userUseCase.getUserByEmail(email);

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
    console.log(id);
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
    } else if (
      error.message === "E-mail já cadastrado no sistema por outro usuário"
    ) {
      return res.status(404).json({ error: error.message });
    }
    console.error(error);
    return res.status(500).json({ error: "Erro ao atualizar usuário" });
  }
};

const login = async (req, res) => {
  try {
    const loginAccess = await userUseCase.login(req.body);
    if (!loginAccess) {
      return res
        .status(404)
        .json({ message: "E-mail ou senha digitados incorretamente" });
    }
    return res.status(200).json({
      message: "Login efetuado com sucesso",
      ...loginAccess,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUserByEmail,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
  login,
};
