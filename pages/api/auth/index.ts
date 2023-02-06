import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../db/dbConnect";
const User = require("../../../models/User");

dbConnect();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "DELETE":
      try {
        
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
