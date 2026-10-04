import { Router } from "express";
import comissaoController from "../controllers/comissao-controller.ts";
import estoqueController from "../controllers/estoque-controlller.ts";
import jurosController from "../controllers/juros-controller.ts";

const routes = Router();

routes.get("/comissoes", comissaoController);
routes.post("/estoque", estoqueController);
routes.post("/juros", jurosController);

export default routes;
