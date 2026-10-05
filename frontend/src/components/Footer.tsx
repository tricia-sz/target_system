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
    <footer className="w-full border-t-8 border-t-orange-600 bg-orange-200 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6">
        <img src="/logo.svg" alt="Target" width={150} className="mb-8" />

        <ul className="grid w-full grid-cols-2 gap-6 text-center text-orange-900 sm:grid-cols-3 lg:grid-cols-9">
          {cidades.map(([cidade, telefone]) => (
            <li key={cidade} className="flex flex-col items-center">
              <strong>{cidade}</strong>

              <span className="whitespace-nowrap">{telefone}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col items-center justify-center gap-2 text-orange-700 md:flex-row">
          <span>
            Developed by{" "}
            <a
              href="https://tricia-sz.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-orange-600 hover:underline"
            >
              Patrícia Souza
            </a>{" "}
            ❤️ 2026
          </span>
        </div>
      </div>
    </footer>
  );
}
