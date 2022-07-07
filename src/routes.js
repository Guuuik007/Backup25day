import express from "express";
import usuarios from "./controllers/usuario.js"

const routes = express.Router();

routes.get("/usuarios", usuarios.findAll); 

/*
routes.get("/usuarios/:id", (request, response) => {
  let id = request.params.id; 
  return response.json(usuarios[id]);
});

*/routes.post("/usuarios", usuarios.criarUsuario);

  
  /*routes.delete("/usuarios/:id", (request, response) => {
    let id = request.params.id
    usuarios[id] = null;
      response.json({mensagem: "Funcionou a requisição DELETE"});
});*/


export default routes;