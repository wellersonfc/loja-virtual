import express from 'express';
import * as usuariosController from '../controllers/usuarioController';

const usuarioRoutes = express.Router();

usuarioRoutes.get('/usuarios', async (req, res) => {
    await usuariosController.getUsuarios(req, res);
});

usuarioRoutes.post('/usuarios', async (req, res) => {
    await usuariosController.addUsuario(req, res);
});

usuarioRoutes.get('/usuarios/:id', async (req, res) => {
    await usuariosController.getUsuarioByIdController(req, res);
});

usuarioRoutes.put('/usuarios/:id', async (req, res) => {
    await usuariosController.updateUsuarioData(req, res);
});

usuarioRoutes.put('/usuariosStatus/:id', async (req, res) => {
    await usuariosController.updateUsuarioStatusData(req, res);
});

usuarioRoutes.delete('/usuarios/:id', async (req, res) => {
    await usuariosController.deleteUsuarioData(req, res);
});

usuarioRoutes.get('/login', async (req, res) => {
    await usuariosController.loginUsuarioController(req, res);
});


export default usuarioRoutes;
