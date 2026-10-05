import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col justify-center border-t-8 border-t-orange-700 bg-orange-200 py-4">
      <div className="mx-auto">
        <img src="./public/logo.svg" alt="Target" className="" width={150} />
      </div>
      <div className="flex w-full items-center justify-center py-8 text-orange-900">
        <ul className="flex items-center justify-between gap-8">
          <div className="flex flex-col items-center">
            <li>
              <b>Comercial</b>
            </li>
            <span>(11) 94543.1551</span>
          </div>
          <div className="flex flex-col items-center">
            <li>
              <b>São Paulo</b>
            </li>
            <span>(11) 3801.4015</span>
          </div>
          <div className="flex flex-col items-center">
            <li>
              <b>Ribeirão Preto</b>
            </li>
            <span>(16) 3442.7816</span>
          </div>
          <div className="flex flex-col items-center">
            <li>
              <b>Recife</b>
            </li>
            <span>(81) 3269.8919</span>
          </div>
          <div className="flex flex-col items-center">
            <li>
              <b>Salvador</b>
            </li>
            <span>(71) 3013.4862</span>
          </div>
          <div className="flex flex-col items-center">
            <li>
              <b>Porto Alegre</b>
            </li>
            <span>(51) 3019.9189</span>
          </div>
          <div className="flex flex-col items-center">
            <li>
              <b>Rio de Janeiro</b>
            </li>
            <span>(27) 4042.2790</span>
          </div>
          <div className="flex flex-col items-center">
            <li>
              <b>Goiânia</b>
            </li>
            <span>(62) 3432.9072</span>
          </div>
          <div className="flex flex-col items-center">
            <li>
              <b>Vitória</b>
            </li>
            <span>(27) 4042.2790</span>
          </div>
        </ul>
      </div>
      <div className="mx-auto">
        <span className="justify-centerfont-mono flex w-full cursor-pointer items-center text-sm tracking-wide text-orange-600 hover:text-orange-900">
          Desenvolvido por Parícia Souza{" "}
          <span className="px-2 text-orange-500">
            <FaHeart size={18} color="" />
          </span>{" "}
          © 2026. Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
}
