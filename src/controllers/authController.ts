import type { Request, Response } from "express";
import validateSignupForm from "@/middleware/validateSignupForm";

const signupPost = [
	validateSignupForm,
	(req: Request, res: Response) => {
		res.json("signup route hit");
	},
];

export { signupPost };
