const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.post("/criarUsuario", userController.createUser);
router.get("/buscarUsuario/:email", userController.getUserByEmail);
router.get("/buscarUsuarioPorId/:id", userController.getUserById);
router.delete("/deletarUsuario/:id", userController.deleteUser);
router.put("/atualizaUsuario/:id", userController.updateUser);

module.exports = router;
