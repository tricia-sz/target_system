import { useEffect, useState } from "react";

import { buscarEstoque, type IProduto } from "../service/estoque";

export default function Estoque() {
  const [produtos, setProdutos] = useState<IProduto[]>([]);

  useEffect(() => {
    buscarEstoque()
      .then(setProdutos)
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Estoque</h1>

        <p className="mt-2 text-gray-600">
          Consulte os produtos disponíveis no estoque.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {produtos.map((produto) => (
          <article
            key={produto.codigoProduto}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <span className="text-sm font-medium text-gray-500">
                  Código
                </span>

                <p className="text-sm font-semibold text-gray-800">
                  #{produto.codigoProduto}
                </p>
              </div>

              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                Estoque
              </span>
            </div>

            <h2 className="mb-6 text-lg font-bold text-gray-900">
              {produto.descricaoProduto}
            </h2>

            <div className="flex items-end justify-between border-t border-gray-100 pt-4">
              <span className="text-sm text-gray-500">
                Quantidade disponível
              </span>

              <strong className="text-2xl font-bold text-orange-600">
                {produto.estoque}
              </strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
