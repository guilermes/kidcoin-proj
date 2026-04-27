import { Request, Response } from "express";
import { AlunoService } from "../services/AlunoService";

export class AlunoController {
  async create(req: Request, res: Response) {
    try {
      const { name, email, password, role } = req.body;

      if (!name || !email || !password) {
        return res.status(400).json({
          message: "Nome, email e senha são obrigatórios"
        });
      }

      const aluno = await AlunoService.create({
        name,
        email,
        password
      });

      return res.status(201).json(aluno);

    } catch (error: any) {
      return res.status(400).json({
        message: error.message || "Erro ao cadastrar usuário"
      });
    }
  }
}