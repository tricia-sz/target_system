import { useEffect, useState } from "react";

import { buscarComissoes, type IComissao } from "../service/comissoes";

import { Container } from "../components/Contianer";

export default function Comissao() {
  const [comissoes, setComissoes] = useState<IComissao[]>([]);

  useEffect(() => {
    async function carregar() {
      try {
        const data = await buscarComissoes();

        setComissoes(data);
      } catch (error) {
        console.error("Erro ao carregar comissões:", error);
      }
    }

    carregar();
  }, []);

  return (
    <Container className="w-full max-w-7xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Comissões</h1>

        <p className="mt-2 text-gray-600">
          Consulte as vendas e as comissões de cada vendedor.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {comissoes.map((comissao, index) => (
          <article
            key={index}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <span className="text-sm font-medium text-gray-500">
                  Vendedor
                </span>

                <h2 className="mt-1 text-lg font-bold text-gray-900">
                  {comissao.vendedor}
                </h2>
              </div>

              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                Comissão
              </span>
            </div>

            <div className="space-y-4 border-t border-gray-100 pt-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Venda</span>

                <strong className="text-gray-800">
                  {comissao.valorVenda.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Comissão</span>

                <strong className="text-xl font-bold text-orange-600">
                  {comissao.comissao.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}
