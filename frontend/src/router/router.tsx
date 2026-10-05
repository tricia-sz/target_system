import Footer from "../components/Footer";
import Header from "../components/Header";
import Comissao from "../pages/Comissao";
import Estoque from "../pages/Estoque";
import { Home } from "../pages/Home";
import { createBrowserRouter, Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/comissao",
        element: <Comissao />,
      },
      {
        path: "/estoque",
        element: <Estoque />,
      },
    ],
  },
]);
