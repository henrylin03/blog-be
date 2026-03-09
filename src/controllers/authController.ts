import type { Request, Response } from "express";

const loginPost = (req: Request, res: Response) => {
	res.json("loggin");
};

export { loginPost };
