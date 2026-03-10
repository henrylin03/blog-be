import type { Request, Response } from "express";
import { authenticateWithJwt } from "@/controllers/authController";
import { prisma } from "@/lib/prisma";

const addNewPost = [
	authenticateWithJwt,
	async (req: Request, res: Response) => {
		const { user } = req;
		if (!user) return res.status(401).json({ error: "Unauthorised" });
		if (!user.isAuthor)
			return res.status(403).json({ error: "You must be an author to post" });

		res.json(user);
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
