require("dotenv").config();

const express = require("express");
const cors = require("cors");

const conectarBanco = require("./config/mongo");

const clienteRoutes = require("./routes/clienteRoutes");
const produtoRoutes = require("./routes/produtoRoutes");

const app = express();

app.use(cors());
app.use(express.json());

conectarBanco();

app.use("/clientes", clienteRoutes);
app.use("/produtos", produtoRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});