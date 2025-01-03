import express from 'express';
import path from 'path';
import * as produtoController from '../controllers/produtoController'; 
import { storage } from '../config/multerConfig'; 
import multer from 'multer';

const produtoRoutes = express.Router();
const upload = multer({ storage }); 


produtoRoutes.post('/produto', upload.single('file'), async (req, res, next) => {
  try {
    const filename = req.file?.filename;
    req.body.foto = filename
    await produtoController.createProduto(req, res);
    if (!filename) {
      res.status(400).json({ mensagem: 'Arquivo não enviado' });
      return;
    }
    res.status(200).json({ mensagem: 'Arquivo enviado com sucesso', filename });
  } catch (error) {
    next(error);
  }
});

produtoRoutes.get('/produtos', async (req, res) => {
    await produtoController.listarProdutos(req, res);
});

produtoRoutes.get('/produtos/:id', async (req, res) => {
    await produtoController.getProdutoById(req, res);
});

produtoRoutes.get('/produtos/busca/:search', async (req, res) => {
  await produtoController.searchProdutos(req, res);
});

produtoRoutes.use('/files', express.static(path.resolve(__dirname, '../uploads')));

export default produtoRoutes;
