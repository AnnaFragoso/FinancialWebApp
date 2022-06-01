import { Router } from "express";
import { applicationController } from "../controllers/ApplicationController";

const router: Router = Router();

router.get("/", applicationController.home);

export { router };