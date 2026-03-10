import type { Request, Response } from "express";
import passport from "@/lib/passport";

export const authenticateWithJwt = passport.authenticate("jwt", {
	session: false,
});

export const confirmUserIsAuthorised = (req: Request, res: Response) => {
	const { user } = req;
	if (!user) return res.status(401).json({ error: "Unauthorised" });
	if (!user.isAuthor)
		return res.status(403).json({ error: "You must be an author to post" });

	res.json(user);
};
