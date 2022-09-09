import express from "express";
const app = express();
import dotenv from "dotenv";
import prisma from "@prisma/client";
const { PrismaClient } = prisma;

import {
  createBlogPostRoute,
  getAllBlogPosts,
  getOneBlogPost,
} from "./routes/blogPost/index.js";

dotenv.config();

export const dbClient = new PrismaClient();

const init = async () => {
  app.use(express.json());
  app.get("/", (req, res) => {
    res.send("Hello World");
  });

  app.post("/api/v1/blogPost/create", createBlogPostRoute);
  app.get("/api/v1/blogPost/getAll", getAllBlogPosts);
  app.get("/api/v1/blogPost/get/:id", getOneBlogPost);

  app.listen(process.env.PORT, () =>
    console.log(`Server started on port ${process.env.PORT}`)
  );
};

init();
