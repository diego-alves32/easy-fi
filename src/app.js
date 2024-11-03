const express = require("express");
const dotenv = require("dotenv").config();
const userRoutes = require("./routes/userRoutes.js");
const incomesExpensesRoutes = require("./routes/incomesExpensesRoutes.js");
const categorias = require("./routes/categoriesRoutes.js");

const app = express();

app.use(express.json());

app.use("/users", userRoutes);
app.use("/incomes-expenses", incomesExpensesRoutes);
app.use("/categories", categorias);

module.exports = app;
