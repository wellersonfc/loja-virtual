import { AppDataSource } from "../config/data-source";
import { Usuario } from "../models/Usuarios";
import bcrypt from 'bcrypt';


const usuarioRepository = AppDataSource.getRepository(Usuario);

export const getAllUsuarios = async () => {
  return await usuarioRepository.find();
};

export const getUsuarioById = async (id: number) => {
  const usuario = await usuarioRepository.findOneBy({ id });
  if (!usuario) throw new Error("Usuário não encontrado");
  return usuario;
};

export const createUsuario = async (usuarioData: Partial<Usuario>) => {
  if (usuarioData.status === undefined) usuarioData.status = true; 
  if (usuarioData.senha) {
    const saltRounds = 10;
    usuarioData.senha = await bcrypt.hash(usuarioData.senha, saltRounds);
  }
  const usuario = usuarioRepository.create(usuarioData);
  await usuarioRepository.save(usuario);
  return usuario;
};

export const updateUsuario = async (id: number, usuarioData: Partial<Usuario>) => {
  const usuario = await usuarioRepository.findOneBy({ id });
  if (!usuario) throw new Error("Usuário não encontrado");

  Object.entries(usuarioData).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      (usuario as any)[key] = value;
    }
  });

  return await usuarioRepository.save(usuario);
};

export const updateUsuarioStatus = async (id: number, status: boolean) => {
  const usuario = await usuarioRepository.findOneBy({ id });
  if (!usuario) throw new Error("Usuário não encontrado");

  usuario.status = status;
  return await usuarioRepository.save(usuario);
};

export const deleteUsuario = async (id: number) => {
  const usuario = await usuarioRepository.findOneBy({ id });
  if (!usuario) throw new Error("Usuário não encontrado");
  await usuarioRepository.remove(usuario);
};

export const loginUsuario = async (email: string, senha: string) => {
  const usuario = await usuarioRepository.findOneBy({ email });
  if (!usuario) throw new Error("Usuário não encontrado");

  const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
  if (!senhaCorreta) throw new Error("Senha incorreta");

  return usuario;
};