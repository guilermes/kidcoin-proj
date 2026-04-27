import bcrypt from "bcrypt";
import { prisma } from "../../prisma";

export class ProfessorService {
  static async create(data: {
    name: string;
    email: string;
    password: string;
    salt: string;
  }) {
    // Verifica se email já existe
    const userExists = await prisma.professor.findUnique({
      where: { email: data.email }
    });

    if (userExists) {
      throw new Error("Email já cadastrado");
    }

    // Gera hash + salt
    const salt = (await bcrypt.genSalt()).toString();
    const hashedPassword = await bcrypt.hash(
      data.password,
      salt
    );

    // Cria usuário
    const professor = await prisma.professor.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
        salt: salt
      }
    });

    // Nunca retornar senha
    const { password, ...userWithoutPassword } = professor;
    return userWithoutPassword;
  }
}