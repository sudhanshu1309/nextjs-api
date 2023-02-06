import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../db/dbConnect";
const Blog = require("../../../models/Blog");

dbConnect();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    query: { id },
  } = req;

  switch (method) {
    case "GET":
      try {
        const blog = await Blog.findById(id);
        if (!blog) {
          return res.status(400).json({
            success: false,
          });
        }
        return res.status(200).json({
          success: true,
          blog: blog,
        });
      } catch (error) {
        return res.status(400).json({
          success: false,
          msg: error,
        });
      }
      break;
    case "PUT":
      try {
        const blog = await Blog.findByIdAndUpdate(id, req.body, {
          new: true,
        });
        if (!blog) {
          return res.status(400).json({
            success: false,
          });
        }
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
    case "DELETE":
      try {
        const blog = await Blog.findByIdAndDelete({ _id: id });
        if (!blog) {
          return res.status(400).json({
            success: false,
          });
        }
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
