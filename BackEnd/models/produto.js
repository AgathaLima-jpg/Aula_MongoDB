const mongoose = require("mongoose");

const ProdutoSchema = new mongoose.Schema({
  NOME_PRODUTO: {
    type: String,
    required: true
  },

  VALOR: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("PRODUTOS", ProdutoSchema, "PRODUTOS");