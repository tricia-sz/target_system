export default interface IEstoque {
  codigoProduto: number;
  tipo: "entrada" | "saída";
  quantidade: number;
  descricao: string;
}
