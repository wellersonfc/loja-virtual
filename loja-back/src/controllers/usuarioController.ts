import { Request, Response } from "express";
import { getAllUsuarios, createUsuario, updateUsuario, deleteUsuario, updateUsuarioStatus, loginUsuario, getUsuarioById} from "../services/usuarioService";


export const getUsuarios = async (req: Request, res: Response) => {
  try {
    const usuarios = await getAllUsuarios();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const addUsuario = async (req: Request, res: Response) => {
  try {
    console.log(req.body)
    const usuario = await createUsuario(req.body);
    res.status(201).json(usuario);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateUsuarioData = async (req: Request, res: Response) => {
  try {
    const updatedUsuario = await updateUsuario(parseInt(req.params.id), req.body);
    res.json(updatedUsuario);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateUsuarioStatusData = async (req: Request, res: Response) => {
  try {
    const { status } = req.body;
    const updatedUsuario = await updateUsuarioStatus(parseInt(req.params.id), status);
    res.json(updatedUsuario);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const deleteUsuarioData = async (req: Request, res: Response) => {
  try {
    await deleteUsuario(parseInt(req.params.id));
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const loginUsuarioController = async (req: Request, res: Response) => {
  try {

    const { email, senha } = req.query;
    console.log( email, senha )
    if (!email || !senha) {
      return res.status(400).json({ mensagem: 'Email e senha são obrigatórios' });
    }

    const usuario = await loginUsuario(email as string, senha as string);

    return res.status(200).json({
      mensagem: 'Login bem-sucedido',
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        status: usuario.status,
      },
    });
  } catch (error: any) {
    if (error.message === 'Usuário não encontrado' || error.message === 'Senha incorreta') {
      return res.status(401).json({ mensagem: error.message });
    }

    console.error('Erro no login:', error);
    return res.status(500).json({ mensagem: 'Erro no servidor, tente novamente mais tarde' });
  }
};

export const getUsuarioByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ mensagem: 'O ID do usuário é obrigatório' });
    }

    const idNumber = parseInt(id, 10);
    if (isNaN(idNumber)) {
      return res.status(400).json({ mensagem: 'O ID deve ser um número válido' });
    }

    const usuario = await getUsuarioById(idNumber);

    return res.status(200).json(usuario);
  } catch (error: any) {

    if (error.message === 'Usuário não encontrado') {
      return res.status(404).json({ mensagem: error.message });
    }

    console.error('Erro ao buscar usuário:', error);
    return res.status(500).json({ mensagem: 'Erro no servidor, tente novamente mais tarde' });
  }
};