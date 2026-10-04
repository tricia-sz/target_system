import type { Request, Response } from "express";
import comissaoService from "../service/comissao-service.ts";

const comissaoController = (request: Request, response: Response) => {
  const resultado = comissaoService();

  return response.json(resultado);
};

export default comissaoController;
