import { Router } from "express";
import { loginPost, validateJwtGet } from "@/controllers/authController";

const authRouter = Router();

authRouter.get("/validate-jwt", validateJwtGet);
authRouter.post("/login", loginPost);

export default authRouter;
