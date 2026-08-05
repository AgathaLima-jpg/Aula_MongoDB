const express = require("express");
const router = express.Router();

const Cliente = require("../models/Cliente");



router.post("/", async (req, res) => {
    try {
        const cliente = await Cliente.create(req.body);
        res.status(201).json(cliente);

    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
});



router.get("/", async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);

    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
});



router.put("/:id", async (req, res) => {
    try {
        const cliente = await Cliente.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!cliente) {
            return res.status(404).json({
                mensagem: "Cliente não encontrado"
            });
        }

        res.json(cliente);

    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
});



router.delete("/:id", async (req, res) => {
    try {
        const cliente = await Cliente.findByIdAndDelete(req.params.id);

        if (!cliente) {
            return res.status(404).json({
                mensagem: "Cliente não encontrado"
            });
        }

        res.json({
            mensagem: "Cliente deletado com sucesso"
        });

    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
});


module.exports = router;