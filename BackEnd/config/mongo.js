const mongoose = require("mongoose");

async function conectarBanco() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB conectado!");
    console.log("Banco:", mongoose.connection.name);

  } catch (erro) {
    console.log("❌ Erro ao conectar MongoDB:");
    console.log(erro.message);
  }
}

module.exports = conectarBanco;