import type { Request, Response } from "express";
import { authService } from "./auth.service.js";
import type { SignupData } from "../../types/auth.types.js";

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
        res.status(500).send("Internal Server Error");
      }
    }
  },

  async profile(req: Request, res: Response) {
    try {
      const userId: string = req.userId as string;
      const profile = await authService.profile(userId);
      res.send({ id: profile.id, email: profile.email });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send(error.message);
      } else {
        res.status(500).send("Internal Server Error")
      }
    }
  },

  async updateProfile(req: Request, res: Response) {
    try {
      const updateData = req.body;
      const userId: string = req.userId as string;
      const updateProfile = await authService.updateProfile(userId, updateData);
      res.send({ id: updateProfile.id, email: updateProfile.email })
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send(error.message);
      } else {
        res.status(500).send("Internal Server Error")
      }
    }
  },

  async changePassword(req: Request, res: Response) {
    try {
      const userId: string = req.userId as string;
      const oldPassword = req.body.oldPassword;
      const newPassword = req.body.newPassword;
      const updatedPassword = await authService.changePassword(userId, oldPassword, newPassword);
      res.send(updatedPassword);
    }
    catch (error) {
      if (error instanceof Error) {
        res.status(400).send(error.message);
      } else {
        res.status(500).send("Internal Server Error");
      }
    }
  }
};