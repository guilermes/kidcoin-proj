import { Request, Response } from "express";
import { ProfessorService } from "../services/ProfessorService";

export class ProfessorController {
    async create(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body;

            if (!name || !email || !password) {
                return res.status(400).json({
                    message: "Nome, email e senha são obrigatórios"
                });
            }

            const professor = await ProfessorService.create({
                name,
                email,
                password
            });

            return res.status(201).json(professor);

        } catch (error: any) {
            return res.status(400).json({
                message: error.message || "Erro ao cadastrar usuário"
            });
        }
    }
}