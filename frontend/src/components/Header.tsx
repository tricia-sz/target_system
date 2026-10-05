import { BsFillClipboard2CheckFill } from "react-icons/bs";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { Link } from "react-router";

export default function Header() {
  return (
    <header className="flex w-full justify-center border-b-8 border-b-orange-700 bg-orange-200 py-4">
      <div className="flex w-96 items-center justify-between">
        <img src="./public/logo.svg" alt="Target" className="" width={150} />
      </div>
      <div className="justify-betwee flex items-center gap-12 text-red-900">
        <div className="flex w-28 items-center justify-center gap-0.5 rounded-2xl bg-orange-300 py-1 text-center">
          <IoIosHome size={26} />
          <Link to="/">Home</Link>
        </div>
        <div className="flex w-32 items-center justify-center gap-1 rounded-2xl bg-orange-300 py-1 text-center">
          <FaMoneyCheckAlt size={26} />
          <Link to="/comissao">Comissao</Link>
        </div>
        <div className="flex w-32 items-center justify-center gap-0.5 rounded-2xl bg-orange-300 py-1 text-center">
          <BsFillClipboard2CheckFill size={26} />
          <Link to="/estoque">Estoque</Link>
        </div>
      </div>
    </header>
  );
}
