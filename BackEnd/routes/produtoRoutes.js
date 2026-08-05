const express = require("express");
const router = express.Router();

const Produto = require("../models/Produto");



router.post("/", async (req, res) => {
    try {
        const produto = await Produto.create(req.body);
        res.status(201).json(produto);

    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
});



router.get("/", async (req, res) => {
    try {
        const produtos = await Produto.find();
        res.json(produtos);

    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
});



router.put("/:id", async (req, res) => {
    try {
        const produto = await Produto.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!produto) {
            return res.status(404).json({
                mensagem: "Produto não encontrado"
            });
        }

        res.json(produto);

    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
});



router.delete("/:id", async (req, res) => {
    try {
        const produto = await Produto.findByIdAndDelete(req.params.id);

        if (!produto) {
            return res.status(404).json({
                mensagem: "Produto não encontrado"
            });
        }

        res.json({
            mensagem: "Produto deletado com sucesso"
        });

    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
});


module.exports = router;