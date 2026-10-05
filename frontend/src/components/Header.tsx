import { BsFillClipboard2CheckFill } from "react-icons/bs";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { Link } from "react-router";

export default function Header() {
  return (
    <header className="w-full border-b-8 border-b-orange-600 bg-orange-200">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-8 py-6 lg:flex-row">
        <div>
          <img
            src="/logo.svg"
            alt="Target"
            width={90}
            className="w-48 lg:w-[250px]"
          />
        </div>

        <nav className="flex items-center gap-4 text-orange-950 lg:gap-12">
          <div className="flex w-32 items-center justify-center gap-1 rounded-full bg-orange-100 py-2 shadow shadow-amber-600 lg:w-36">
            <IoIosHome size={26} />

            <Link to="/">Home</Link>
          </div>

          <div className="flex w-32 items-center justify-center gap-1 rounded-full bg-orange-100 py-2 shadow shadow-amber-600 lg:w-36">
            <FaMoneyCheckAlt size={26} />

            <Link to="/comissao">Comissão</Link>
          </div>

          <div className="flex w-32 items-center justify-center gap-1 rounded-full bg-orange-100 py-2 shadow shadow-amber-600 lg:w-36">
            <BsFillClipboard2CheckFill size={26} />

            <Link to="/estoque">Estoque</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
