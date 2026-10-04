export default interface IEstoque {
  codigoProduto: number;
  tipo: "entrada" | "saida";
  quantidade: number;
  descricao: string;
}
