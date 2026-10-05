import type IJuros from "../types/juros.type.ts";

export default async function jurosService({ dataVencimento, valor }: IJuros) {
  const vencimento = new Date(dataVencimento);

  const hoje = new Date();

  const diferenca = hoje.getTime() - vencimento.getTime();

  const diasAtraso = Math.max(0, Math.floor(diferenca / (1000 * 60 * 24)));

  const juros = valor * 0.025 * diasAtraso;

  const valorTotal = valor + juros;

  return {
    valorOriginal: valor,
    dataVencimento: dataVencimento,
    diasAtraso,
    juros: Number(juros.toFixed(2)),
    valorTotal: Number(valorTotal.toFixed(2)),
  };
}
