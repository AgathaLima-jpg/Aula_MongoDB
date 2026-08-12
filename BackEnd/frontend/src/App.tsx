import React, { useEffect, useState } from "react";
import api from "./services/api";

interface Cliente {
  _id: string;
  nome: string;
  cpf: string;
  email: string;
}

interface Produto {
  _id: string;
  NOME_PRODUTO: string;
  VALOR: number;
}

function App() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [mensagem, setMensagem] = useState("Conectando...");

  useEffect(() => {
    async function buscarDados() {
      try {
        const clientesResponse = await api.get("/clientes");
        const produtosResponse = await api.get("/produtos");

        setClientes(clientesResponse.data);
        setProdutos(produtosResponse.data);

        setMensagem("Conectado ao Back-end!");
      } catch (erro) {
        console.error(erro);
        setMensagem("Erro ao conectar com o Back-end");
      }
    }

    buscarDados();
  }, []);

  return (
    <div>
      <h1>Minha Aplicação</h1>

      <h2>{mensagem}</h2>

      <hr />

      <h2>Clientes</h2>

      {clientes.length === 0 ? (
        <p>Nenhum cliente cadastrado.</p>
      ) : (
        clientes.map((cliente) => (
          <div key={cliente._id}>
            <p>Nome: {cliente.nome}</p>
            <p>CPF: {cliente.cpf}</p>
            <p>Email: {cliente.email}</p>
            <hr />
          </div>
        ))
      )}

      <h2>Produtos</h2>

      {produtos.length === 0 ? (
        <p>Nenhum produto cadastrado.</p>
      ) : (
        produtos.map((produto) => (
          <div key={produto._id}>
            <p>Nome: {produto.NOME_PRODUTO}</p>
            <p>Preço: R$ {produto.VALOR}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default App;