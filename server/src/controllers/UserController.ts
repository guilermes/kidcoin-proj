import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
  async create(req: Request, res: Response) {
    try {
      const { name, email, password, role } = req.body;

      if (!name || !email || !password) {
        return res.status(400).json({
          message: "Nome, email e senha são obrigatórios"
        });
      }

      const user = await UserService.create({
        name,
        email,
        password,
        role
      });

      return res.status(201).json(user);

    } catch (error: any) {
      return res.status(400).json({
        message: error.message || "Erro ao cadastrar usuário"
      });
    }
  }
}