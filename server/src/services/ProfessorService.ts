import bcrypt from "bcrypt";
import { prisma } from "../../prisma";

export class ProfessorService {
  static async create(data: {
    name: string;
    email: string;
    password: string;
  }) {
    // Verifica se email já existe
    const userExists = await prisma.professor.findUnique({
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
    const professor = await prisma.professor.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
      }
    });

    // Nunca retornar senha
    const { password, ...userWithoutPassword } = professor;
    return userWithoutPassword;
  }
}