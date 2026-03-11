import { body } from "express-validator";

const validateComment = [
	body("text")
		.trim()
		.isLength({ min: 2, max: 600 })
		.withMessage("Comment must be between 2 and 600 characters"),
];

export default validateComment;
