import { Router } from "express";
import { addComment, getComments } from "@/controllers/commentsController";

const commentsRouter = Router({ mergeParams: true });

commentsRouter.get("/", getComments);
commentsRouter.post("/", addComment);

export default commentsRouter;
