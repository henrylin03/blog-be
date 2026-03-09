import type { Request, Response } from "express";
import { matchedData, validationResult } from "express-validator";
import validateSignupForm from "@/middleware/validateSignupForm";

const signupPost = [
	validateSignupForm,
	(req: Request, res: Response) => {
		const formData = matchedData(req, { onlyValidData: false });
		const { email, username } = formData;

		const errors = validationResult(req);
		if (!errors.isEmpty())
			return res.status(400).json({ errors: errors.array(), email, username });

		res.json("signup route hit");
	},
];

export { signupPost };
