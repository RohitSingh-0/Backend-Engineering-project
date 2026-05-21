import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const middleware = (req: Request, res: Response, next: NextFunction): void => {

  const header: string | undefined = req.headers.authorization;

  if (!header) {
    res.status(401).send("authorization header missing");
    return;
  }

  const token: string | undefined = header.split(" ")[1];

  if (!token) {
    res.status(401).send("invalid token");
    return;
  }

  try {

    jwt.verify(
      token,
      process.env.JWT_SECRET as string
    );

    next();

  } catch (error) {

    res.status(401).send("detail mismatch");

  }

};