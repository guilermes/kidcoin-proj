// import { Router } from "express";
// import { UserController } from "../controllers/UserController";

// const userRoutes = Router();
// const userController = new UserController();

// userRoutes.post("/users", userController.create);

// export default userRoutes;


import { Router } from "express";
import { AlunoController } from "../controllers/AlunoController";
import { authMiddleware } from "../middleware/authMiddleware";

const userRoutes = Router();
const userController = new AlunoController();

/* cadastro */
userRoutes.post("/cadastro/aluno", userController.create);


userRoutes.get("/me", authMiddleware, (req: any, res) => {
  return res.json({ userId: req.user.id });
});

export default userRoutes;