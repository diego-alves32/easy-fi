const express = require("express");
const categoriesController = require("../controllers/categoriesController.js");
const router = express.Router();

router.get("/buscarCategorias", categoriesController.getCategories);

module.exports = router;
