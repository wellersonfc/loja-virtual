import { Router } from 'express';
import usuariosRoutes from './usuarioRoutes';
import produtoRoutes from './produtoRoutes'

const router = Router();

// Adiciona as rotas de usuarios
router.use(usuariosRoutes);
// Adicionar as rotas de Produtos
router.use(produtoRoutes);


export default router;
