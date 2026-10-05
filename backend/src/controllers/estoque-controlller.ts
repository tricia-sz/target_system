import type { Request, Response } from "express";
import type IEstoque from "../types/estoque.type.ts";
import { estoqueService } from "../service/estoque-service.ts";

export default function estoqueController(
  request: Request,
  response: Response,
) {
  const dados: IEstoque = request.body;

  const resultado = estoqueService(dados);

  return response.json(resultado);
}
