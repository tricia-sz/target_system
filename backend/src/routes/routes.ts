import { Router } from "express";
import comissaoController from "../controllers/comissao-controller.ts";
import estoqueController from "../controllers/estoque-controlller.ts";
import jurosController from "../controllers/juros-controller.ts";
import listarEstoqueController from "../controllers/estoque-list-controller.ts";

const routes = Router();

routes.get("/comissoes", comissaoController);
routes.post("/juros", jurosController);
routes.get("/estoque", listarEstoqueController);
routes.post("/estoque", estoqueController);

export default routes;
