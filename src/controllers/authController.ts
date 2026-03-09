import type { Request, Response } from "express";
import "dotenv/config";
import jwt from "jsonwebtoken";
import passport from "@/lib/passport";

const loginPost = (req: Request, res: Response) => {
	const { email, password } = req.body;
	if (email === "correct@email.com") {
		if (password === "Password") {
			const options = { expiresIn: 120 };
			const secret = process.env.SECRET;

			const token = jwt.sign({ email }, String(secret), options);
			return res.status(200).json({ message: "Auth ok", token });
		}
	}
	res.status(401).json({ error: "Auth failed" });
};

// const loginPost = passport.authenticate("jwt", {
//   session: false,
// });

export { loginPost };
