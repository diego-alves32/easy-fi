const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.post("/cadastro", userController.createItem);
router.get("/buscarItem/:id", userController.getItemById);
router.delete("/deletarItem/:id", userController.deleteItem);
router.put("/atualizaItem/:id", userController.updateItem);
router.get("/buscarItensMes/:id", userController.getItemById);

module.exports = router;
