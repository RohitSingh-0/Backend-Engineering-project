import express from "express";
import { authController } from "./auth.controller.js";
import {middleware} from "../../middleware/auth.middleware.js";

const router = express.Router();
router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/profile", middleware, authController.profile);

export default router;