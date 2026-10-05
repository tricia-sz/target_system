import type { Request, Response } from "express";

import { listarEstoque } from "../service/estoque-service.ts";

export default function listarEstoqueController(
  request: Request,
  response: Response,
) {
  const estoque = listarEstoque();

  return response.json(estoque);
}
