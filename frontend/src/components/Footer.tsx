import { Link } from "react-router";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  const cidades = [
    ["Comercial", "(11) 94543.1551"],
    ["São Paulo", "(11) 3801.4015"],
    ["Ribeirão Preto", "(16) 3442.7816"],
    ["Recife", "(81) 3269.8919"],
    ["Salvador", "(71) 3013.4862"],
    ["Porto Alegre", "(51) 3019.9189"],
    ["Rio de Janeiro", "(27) 4042.2790"],
    ["Goiânia", "(62) 3432.9072"],
    ["Vitória", "(27) 4042.2790"],
  ];

  return (
    <footer className="w-full border-t-8 border-t-orange-600 bg-orange-200 py-10">
      <div className="mx-auto mb-8">
        <SocialMedia />
      </div>
      <div className="mx-auto flex max-w-7xl flex-col items-center">
        <img src="/logo.svg" alt="Target" width={250} className="" />

        <ul className="grid w-full grid-cols-2 text-center text-sm text-orange-900 sm:grid-cols-3 lg:grid-cols-9">
          {cidades.map(([cidade, telefone]) => (
            <li key={cidade} className="mb-4 flex flex-col items-center py-4">
              <strong>{cidade}</strong>

              <span className="whitespace-nowrap">{telefone}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center justify-center gap-2 text-xl text-orange-700 md:flex-row">
          <span>
            Developed by{" "}
            <Link
              to="https://tricia-sz.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-orange-800 hover:underline"
            >
              Patrícia Souza
            </Link>{" "}
            🤎 2026
          </span>
        </div>
      </div>
    </footer>
  );
}
