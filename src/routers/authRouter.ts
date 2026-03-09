import { Router } from "express";
import { signupPost } from "@/controllers/authController";

const authRouter = Router();
authRouter.post("/signup", ...signupPost);

export default authRouter;
