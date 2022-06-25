import express from "express";

const routes = express.Router();

let usuarios = [
    {nome: "José Silva", idade: 32 } ,
    {nome : "Maria Silva", idade : 35}
];

routes.get("/usuarios", (request, response) => {
    response.json(usuarios);
});    

routes.get("/usuarios/:id", (request, response) => {
  let id = request.params.id; 
  return response.json(usuarios[id]);
});

routes.post("/usuarios", (request, response) => {
  usuarios.push(request.body);
    return response.json({mensagem: "Funcinou a requisição POST"});
});
  
  routes.delete("/usuarios/:id", (request, response) => {
    let id = request.params.id
    usuarios[id] = null;
      response.json({mensagem: "Funcionou a requisição DELETE"});
});


export default routes;