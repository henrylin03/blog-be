// import type { Request, Response } from "express";
import passport from "@/lib/passport";

const loginPost = passport.authenticate("local", { session: false });

export { loginPost };
