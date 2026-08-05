const mongoose = require("mongoose");

const ClienteSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },

  cpf: {
    type: String,
    required: true,
    unique: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  }
});


module.exports = mongoose.model("CLIENTE", ClienteSchema, "CLIENTE");