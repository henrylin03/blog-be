import { Router } from "express";
import passport from "passport";
import { loginPost } from "@/controllers/authController";

const authRouter = Router();

authRouter.get("/protected", passport.authenticate("jwt", { session: false }));
authRouter.post("/login", loginPost);

export default authRouter;
