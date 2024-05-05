import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config/enviroment";

export const authMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const headers = request.header;

    const auth = headers["Authorization"] || headers["authorization"];
    const token = auth.startWith("Bearer ") ? auth.slice(7) : null;

    const data = jwt.verify(token, config.JWT.KEY);

    if (!data) {
      return response.status(401).json({ message: "Unauthorized" });
    }

    request["user"] = data;

    next();
  } catch (err) {
    console.log(err);
  }
};
