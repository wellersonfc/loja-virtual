import { Request, Response } from 'express';
import { createProdutoService, listarProdutosService, getProdutoByIdService, searchProdutosService } from '../services/produtoService';

export const createProduto = async (req: Request, res: Response): Promise<Response> => {
  try {
    const produto = await createProdutoService(req.body);
    return res.status(201).json(produto);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao criar produto', error });
  }
}

export const listarProdutos = async (req: Request, res: Response): Promise<Response> => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const produtos = await listarProdutosService(Number(page), Number(limit));
    return res.status(200).json(produtos);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao listar produtos', error });
  }
}

export const getProdutoById = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  try {
    const produto = await getProdutoByIdService(Number(id));
    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    return res.status(200).json(produto);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar produto', error });
  }
}

export const searchProdutos = async (req: Request, res: Response): Promise<Response> => {
  const { search } = req.params;  // Aqui estamos pegando o valor do parâmetro de rota 'search'
  const { page = 1, limit = 10 } = req.query;
  try {
    const produtos = await searchProdutosService(String(search), Number(page), Number(limit));
    return res.status(200).json(produtos);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar produtos', error });
  }
}
