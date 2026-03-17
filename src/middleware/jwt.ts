import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const createJwt = (req: Request, res: Response, next: NextFunction) => {
	const { user } = req;
	if (!user) return res.status(401).json({ error: "Auth failed" });

	const JWT_EXPIRATION = "1h";
	const secret = process.env.SECRET;

	const token = jwt.sign({ sub: user.id }, String(secret), {
		expiresIn: JWT_EXPIRATION,
	});

	res.status(200).json({ message: "Auth ok", token });
	next();
};

export { createJwt };
