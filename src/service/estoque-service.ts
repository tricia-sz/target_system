import estoqueData from "../data/estoque.json" with { type: "json" };

import type IEstoque from "../types/estoque.type.ts";

let id = 1;

export default function estoqueService(dados: IEstoque) {
  const produto = estoqueData.estoque.find(
    (produto) => produto.codigoProduto === dados.codigoProduto,
  );

  if (!produto) {
    throw new Error("Produto não encontrado");
  }

  if (dados.tipo === "entrada") {
    produto.estoque += dados.quantidade;
  }

  if (dados.tipo === "saida") {
    produto.estoque -= dados.quantidade;
  }

  return {
    id: id++,
    produto: produto.descricaoProduto,
    tipo: dados.tipo,
    quantidade: dados.quantidade,
    descricao: dados.descricao,
    estoqueFinal: produto.estoque,
  };
}
