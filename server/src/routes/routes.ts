import { Router } from "express";
import userRoutes from "./aluno.routes";
import authRoutes from "./auth.routes";

const routes = Router();

routes.use(userRoutes);
routes.use(authRoutes);

export default routes;