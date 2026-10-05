import api from "./api";

export interface IProduto {
  codigoProduto: number;
  descricaoProduto: string;
  estoque: number;
}

export async function buscarEstoque(): Promise<IProduto[]> {
  const response = await fetch(`${api}/estoque`);

  if (!response.ok) {
    throw new Error("Erro ao buscar estoque");
  }

  return response.json();
}
