import { Router } from "express";
import comissaoController from "../controllers/comissao-controller.ts";
import estoqueController from "../controllers/estoque-controlller.ts";

const routes = Router();

routes.get("/comissoes", comissaoController);
routes.post("/estoque", estoqueController);

export default routes;
