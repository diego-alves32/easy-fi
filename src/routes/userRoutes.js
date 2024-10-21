const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.get("/buscarUsuario/:email", userController.getUser);
router.post("/criarUsuario", userController.createUser);

module.exports = router;
