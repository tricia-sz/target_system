import estoqueData from "../data/estoque.json" with { type: "json" };

import type IEstoque from "../types/estoque.type.ts";

let id = 1;

export async function estoqueService({
  codigoProduto,
  tipo,
  quantidade,
  descricao,
}: IEstoque) {
  const produto = estoqueData.estoque.find(
    (produto) => produto.codigoProduto === codigoProduto,
  );

  if (!produto) {
    throw new Error("Produto não encontrado");
  }

  if (tipo === "entrada") {
    produto.estoque += quantidade;
  }

  if (tipo === "saida") {
    produto.estoque -= quantidade;
  }

  return {
    id: id++,
    produto: produto.descricaoProduto,
    tipo,
    quantidade,
    descricao,
    estoqueFinal: produto.estoque,
  };
}

export function listarEstoque() {
  return estoqueData.estoque;
}
