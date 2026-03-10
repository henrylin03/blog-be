import type { Request, Response } from "express";
import { matchedData, validationResult } from "express-validator";
import { prisma } from "@/lib/prisma";
import {
	authenticateWithJwt,
	confirmUserIsAuthorised,
} from "@/middleware/auth";
import validatePost from "@/middleware/validation/validatePost";
import type { AuthenticatedRequest } from "@/types/types";

const addNewPost = [
	authenticateWithJwt,
	confirmUserIsAuthorised,
	validatePost,
	async (req: AuthenticatedRequest, res: Response) => {
		const data = matchedData(req, { onlyValidData: false });
		const { title, text } = data;

		const errors = validationResult(req);
		if (!errors.isEmpty())
			return res.status(400).json({ errors: errors.array(), title, text });

		try {
			const newPost = await prisma.post.create({
				data: { title, text, authorId: String(req.user.id) },
			});
			res.status(201).json({ message: "New post created", newPost });
		} catch (error) {
			res.status(500).json({ error });
		}
	},
];

const getPublishedPosts = async (_req: Request, res: Response) => {
	const publishedPosts = await prisma.post.findMany({
		where: {
			isPublished: true,
		},
	});

	res.json(publishedPosts);
};

const getPost = async (req: Request, res: Response) => {
	const { postId } = req.params;
	const post = await prisma.post.findUnique({
		where: {
			id: String(postId),
		},
	});

	if (!post) return res.status(404).json({ error: "Post does not exist" });
	// TODO: after auth setup, if unpublished, only that author can see the post.

	res.json(post);
};

export { addNewPost, getPost, getPublishedPosts };
