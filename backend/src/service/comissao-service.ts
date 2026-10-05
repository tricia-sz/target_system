import vendasData from "../data/vendas.json" with { type: "json" };

export default async function comissaoService() {
  return vendasData.vendas.map((venda) => {
    let comissao = 0;

    if (venda.valor >= 500) {
      comissao = venda.valor * 0.05;
    } else if (venda.valor >= 100) {
      comissao = venda.valor * 0.01;
    }

    return {
      vendedor: venda.vendedor,
      valorVenda: venda.valor,
      comissao: Number(comissao.toFixed(2)),
    };
  });
}
