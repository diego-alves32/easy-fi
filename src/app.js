const express = require("express");
const dotenv = require("dotenv").config();
const userRoutes = require("./routes/userRoutes.js");

const app = express();

app.use(express.json());

app.use("/users", userRoutes);

module.exports = app;
