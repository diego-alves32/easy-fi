const express = require("express");
const incomesExpensesController = require("../controllers/incomesExpensesController");
const router = express.Router();

router.post("/cadastroItem", incomesExpensesController.createItem);
router.get("/buscarItem/:id", incomesExpensesController.getItemById);
router.get("/buscarExtratoFiltro/:categoria/:dataInicio-:dataFim", incomesExpensesController.getItensByCategoryAndDateRange);
router.put("/atualizarItem/:id", incomesExpensesController.updateItem);
router.delete("/deletarItem/:id", incomesExpensesController.deleteItem);
