import type { Request, Response } from "express";
import type IJuros from "../types/juros.type.ts";
import jurosService from "../service/juros-service.ts";

export default function jurosController(request: Request, response: Response) {
  const dados: IJuros = request.body;
  const resultado = jurosService(dados);

  return response.json(resultado);
}
