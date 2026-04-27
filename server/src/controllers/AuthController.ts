import { Request, Response } from "express";
import { prisma } from "../../prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class AuthController {
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        return res.status(401).json({ error: "Email ou senha inválidos" });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ error: "Email ou senha inválidos" });
      }

      // gera o token
      const token = jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET!,
        { expiresIn: "1d" }
      );

      // retorna o token
      return res.json({
        token,
        user: {
          id: user.id,
          email: user.email
        }
      });

    } catch (error) {
      return res.status(500).json({ error: "Erro interno no servidor" });
    }
  }
}