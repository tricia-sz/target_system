import { GrLinkNext } from "react-icons/gr";
import Button from "./Button";
import { Container } from "./Contianer";

export function Hero() {
  return (
    <Container className="">
      <h1 className="text-7xl font-extrabold text-nowrap text-orange-950">
        Gestão simples.
      </h1>
      <span className="text-6xl font-extrabold text-nowrap text-orange-600">
        {" "}
        Melhores resultados.
      </span>

      <p className="py-6 text-3xl text-orange-950">
        Controle comissões, estoque e operações em um só lugar
      </p>

      <div className="flex gap-6 py-4">
        <Button className="flex w-64 items-center justify-center gap-2 rounded-full bg-orange-600 py-4 text-xl text-white shadow-2xl shadow-amber-600">
          Começar agora <GrLinkNext />
        </Button>
        <Button className="w-60 rounded-full bg-orange-100 py-4 text-xl text-orange-950 shadow shadow-amber-600">
          Conhecer Recursos{" "}
        </Button>
      </div>
    </Container>
  );
}
