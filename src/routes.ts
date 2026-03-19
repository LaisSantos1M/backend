import {Router} from "express";
import alunosController from "./controllers/alunos"
import cursosController from "./controllers/cursos";
import relacaoController from "./controllers/relacao"

const routes = Router();

routes.get("/", (request, response)=>
response.status(200).json({success:true}),
);



routes.post("/cursos", cursosController.create);
routes.get("/cursos", cursosController.liste);
routes.get("/cursos/:id", cursosController.getById);
routes.put("/cursos/:id", cursosController.update)
routes.delete("/cursos/:id", cursosController.delete)

routes.get("/alunos", alunosController.list);
routes.get("/alunos/:id", alunosController.getById);
routes.post("/alunos", alunosController.create);
routes.put("/alunos/:id", alunosController.update);
routes.delete("/alunos/:id", alunosController.delete);


export default routes;