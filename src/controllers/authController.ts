import "dotenv/config";
import type { Response } from "express";
import passport from "@/lib/passport";
import { authenticateWithJwt } from "@/middleware/auth";
import { createJwt } from "@/middleware/jwt";
import type { AuthenticatedRequest } from "@/types/types";

const loginPost = [
	passport.authenticate("local", { session: false }),
	createJwt,
];

const validateJwtGet = [
	authenticateWithJwt,
	async (req: AuthenticatedRequest, res: Response) => {
		const { password, ...otherUserDetails } = req.user;
		res
			.status(200)
			.json({ message: "JWT validated", user: { ...otherUserDetails } });
	},
];

export { loginPost, validateJwtGet };
