import { createItem, getItem, removeItem } from "../controllers/itemController.js";
import { validateItem } from "../middlwares/validateItem.js";
import { Router } from "express";

const router = Router();

router.get("/", getItem);
router.post("/", validateItem, createItem);
router.delete("/:id", removeItem);

export default router;