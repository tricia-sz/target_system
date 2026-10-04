import express, {} from "express";
// import { router } from "./routes/routes.js";
const server = express();
server.use(express.json());
// server.use(router);
server.get("/", (request, response) => {
    return response.status(200).json({ message: "Target API" });
});
server.listen(3333, () => console.log("🔥 Servidor rodando em http://localhost:3333 🚀"));
//# sourceMappingURL=server.js.map