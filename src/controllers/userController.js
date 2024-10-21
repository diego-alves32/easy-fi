const userUseCase = require("../use_case/userUseCase");

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

const createUser = async (req, res) => {
  try {
    await userUseCase.createUser(req.body);
    return res.status(201).json({ message: "Usuário criado com sucesso" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUser,
  createUser,
};
