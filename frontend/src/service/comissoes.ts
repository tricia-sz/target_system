import api from "./api";

export interface IComissao {
  vendedor: string;
  valorVenda: number;
  comissao: number;
}

export async function buscarComissoes(): Promise<IComissao[]> {
  const response = await fetch(`${api}/comissoes`);

  if (!response.ok) {
    throw new Error("Erro ao buscar comissões");
  }

  return response.json();
}
