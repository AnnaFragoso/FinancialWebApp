import { Router } from "express";
import { applicationController } from "../controllers/ApplicationController";
import { authController } from "../controllers/AuthController";

const router: Router = Router();

router.get("/", applicationController.home);

router.get("/auth/token", authController.getToken);

router.post("/register", authController.linkRegister);

export { router };