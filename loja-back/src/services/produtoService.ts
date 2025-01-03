import { AppDataSource } from "../config/data-source";
import { Produto } from '../models/Produtos';

  const produtoRepository = AppDataSource.getRepository(Produto);


  export const createProdutoService = async(data: Partial<Produto>): Promise<Produto> => {
    const produto = produtoRepository.create(data);
    return await produtoRepository.save(produto);
  }

  export const listarProdutosService = async (page: number = 1, limit: number = 10): Promise<Produto[]> =>{
    const skip = (page - 1) * limit;
    return await produtoRepository.find({
      skip,
      take: limit,
    });
  }

  export const getProdutoByIdService = async (id: number): Promise<Produto | null> =>{
    const produto = await produtoRepository.findOne({
      where: { id }, // Aqui você especifica a condição de busca
    });
    return produto;
  }

  export const searchProdutosService = async (
    busca: string,
    page: number = 1,
    limit: number = 10
  ): Promise<Produto[]> => {
    const skip = (page - 1) * limit;
  
    return await produtoRepository
      .createQueryBuilder("produto")
      .where("produto.descricao LIKE :busca", { busca: `%${busca}%` }) // Usando o parâmetro 'busca' corretamente
      .skip(skip)
      .take(limit)
      .getMany();
  };
  
  
