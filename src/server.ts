import express, { type Request, type Response } from "express";

const server = express();

server.use(express.json());

server.get("/", (request: Request, response: Response) => {
  return response.status(200).json({ message: "Target API" });
});

server.listen(3333, () =>
  console.log("🔥 Servidor rodando em http://localhost:3333 🚀"),
);
