import bcrypt from "bcrypt";
import { prisma } from "../../prisma";

export class UserService {
  static async create(data: {
    name: string;
    email: string;
    password: string;
    role: string;
  }) {
    // Verifica se email já existe
    const userExists = await prisma.user.findUnique({
      where: { email: data.email }
    });

    if (userExists) {
      throw new Error("Email já cadastrado");
    }

    // Gera hash + salt
    const hashedPassword = await bcrypt.hash(
      data.password,
      10
    );

    // Cria usuário
    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
        role: data.role ?? "USER"
      }
    });

    // Nunca retornar senha
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}