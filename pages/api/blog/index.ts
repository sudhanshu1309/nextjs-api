import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../db/dbConnect";
const Blog = require("../../../models/Blog");

dbConnect();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const blogs = await Blog.find({});
        res.status(200).json({
          success: true,
          blogs: blogs,
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          msg: error,
        });
      }
      break;
    case "POST":
      try {
        const blog = await Blog.create(req.body);
        res.status(200).json({
          success: true,
          blog: blog,
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          msg: error,
        });
      }
      break;

    default:
      res.status(405).json({
        success: false,
        msg: "Method Not Allowed",
      });
      break;
  }
}
