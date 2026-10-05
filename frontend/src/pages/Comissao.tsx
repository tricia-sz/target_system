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
    <Container className="mt-8 mb-8 grid grid-cols-4 gap-12 space-y-4 p-8 shadow-2xl shadow-amber-600">
      {comissoes.map((comissao, index) => (
        <Container
          key={index}
          className="items-center justify-center rounded-lg bg-orange-100 p-4 text-orange-800 shadow shadow-amber-600"
        >
          <p>
            <b>Vendedor:</b> {comissao.vendedor}
          </p>

          <p>
            <b>Venda:</b>{" "}
            {comissao.valorVenda.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>

          <p>
            <b>Comissão:</b>{" "}
            {comissao.comissao.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </Container>
      ))}
    </Container>
  );
}
