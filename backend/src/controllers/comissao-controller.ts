import type { Request, Response } from "express";

import comissaoService from "../service/comissao-service.ts";

const comissaoController = async (request: Request, response: Response) => {
  const resultado = await comissaoService();

  return response.status(200).json(resultado);
};

export default comissaoController;
