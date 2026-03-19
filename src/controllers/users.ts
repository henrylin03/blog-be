import bcrypt from "bcryptjs";
import type { Request, Response } from "express";
import { matchedData, validationResult } from "express-validator";
import { prisma } from "@/lib/prisma";
import validateSignupForm from "@/middleware/validation/signup";
import type { AuthenticatedRequest } from "@/types/types";

const newUserPost = [
	validateSignupForm,
	async (req: Request, res: Response) => {
		const formData = matchedData(req, { onlyValidData: false });
		const { email, username } = formData;

		const errors = validationResult(req);
		if (!errors.isEmpty())
			return res.status(400).json({ errors: errors.array(), email, username });

		const { password, firstName, lastName, website } = formData;
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		try {
			const newUser = await prisma.user.create({
				data: {
					email,
					username,
					password: hashedPassword,
					firstName,
					lastName,
					website,
				},
			});

			const { password, ...otherUserDetails } = newUser;
			res.status(201).json({ ...otherUserDetails });
		} catch (err) {
			res.status(500).json({ error: err });
		}
	},
];

const getMyPosts = async (req: AuthenticatedRequest, res: Response) => {
	const { published: isPublished } = req.query;
	const isPublishedFilterQuery =
		typeof isPublished === "string"
			? { isPublished: Boolean(JSON.parse(isPublished)) }
			: {};

	try {
		const myPosts = await prisma.post.findMany({
			where: { AND: { authorId: req.user.id, ...isPublishedFilterQuery } },
		});
		res.status(200).json({ posts: myPosts });
	} catch (error) {
		res.status(500).json({ error });
	}
};

export { getMyPosts, newUserPost };
