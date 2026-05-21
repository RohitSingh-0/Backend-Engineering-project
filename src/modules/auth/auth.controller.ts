import type { Request, Response } from "express";
import { authService } from "./auth.service.js";
import type { SignupData } from "./auth.types.js";

export const authController = {
  async signup(req: Request, res: Response) {
    try {
      const data: SignupData = req.body;
      const user = await authService.signup(data);
      res.send(user);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send(error.message);
      } else {
        res.status(400).send("An unknown error occurred during signup.");
      }
    }
  },

  async login(req: Request, res: Response) {
    try {
      const data = req.body;
      const user = await authService.login(data);
      res.send(user);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send(error.message);
      } else {
        res.status(400).send("incorrect password");
      }
    }
  },

  async profile(req: Request, res: Response) {
    res.send("profile valid");
  },
};
