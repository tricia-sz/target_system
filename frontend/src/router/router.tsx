import Footer from "../components/Footer";
import Header from "../components/Header";
import Comissao from "../pages/Comissao";
import Estoque from "../pages/Estoque";
import { Home } from "../pages/Home";
import { createBrowserRouter, Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

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
