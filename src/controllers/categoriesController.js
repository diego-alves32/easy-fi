const categoriesUseCase = require("../use_case/categoriesUseCase");

const getCategories = async (req, res) => {
  try {
    const categorias = await categoriesUseCase.getCategories();

    if (!categorias || categorias.length < 1) {
      return res.status(404).json({ message: "Categorias não encontradas" });
    }

    return res.status(200).json({ categorias });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCategories,
};
