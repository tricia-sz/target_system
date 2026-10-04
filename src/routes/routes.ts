import { Router } from "express";
import comissaoController from "../controllers/comissao-controller.ts";

const routes = Router();

routes.get("/comissoes", comissaoController);

export default routes;
