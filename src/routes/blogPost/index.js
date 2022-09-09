import { dbClient } from "../../index.js";

export const createBlogPostRoute = async (req, res) => {
  const { title, body, tags, nickname } = req.body;

  const createdBlogPost = await dbClient.blogPost.create({
    data: {
      title,
      body,
      tags,
      nickname,
    },
  });

  return res.json({ blogPost: createdBlogPost });
};

export const getAllBlogPosts = async (req, res) => {
  const blogPosts = await dbClient.blogPost.findMany();

  return res.json(blogPosts);
};

export const getOneBlogPost = async (req, res) => {
  const id = req.params["id"];
  const blogPost = await dbClient.blogPost.findUnique({
    where: {
      id,
    },
  });

  return res.json(blogPost);
};
