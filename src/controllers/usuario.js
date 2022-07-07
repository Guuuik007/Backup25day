import { response } from "express";
import UsuarioRepository from "../models/usuariosModel.js"

async function findAll(request, response) {
    const usuarios = await UsuarioRepository.findAll();
    response.json(usuarios);
}

async function criarUsuario(request, response) {
    const novoUsuario = await UsuarioRepository.create
    ({
        nome: request.body.nome,
        email: request.body.email
    })
response.json(novoUsuario);
};

export default { findAll, criarUsuario };