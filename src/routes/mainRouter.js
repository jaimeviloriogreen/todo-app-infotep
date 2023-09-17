import { Router } from "express";
import validateTask from "../middlewares/validateInputs.js";
import { saveTask, getTasks, updateTaskStatus } from "../controller/mainController.js";

const router = Router();

router.post("/get_tasks", getTasks);
router.post("/save_task", validateTask, saveTask);
router.put("/update_status", updateTaskStatus);

export default router;