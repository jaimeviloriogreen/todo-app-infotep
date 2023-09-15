import { Router } from "express";
import validateTask from "../middlewares/validateInputs.js";
import { save_task } from "../controller/mainController.js";

const router = Router();

router.post("/save_task", validateTask, save_task);

export default router;