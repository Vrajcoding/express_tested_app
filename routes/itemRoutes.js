import { createItem, getItem, removeItem } from "../controllers/itemController.js";
import { validateItem } from "../middlewares/validateItem.js";
import { Router } from "express";
import WrapAsync from "../utils/WrapAsync.js";

const router = Router();

router.get("/", WrapAsync(getItem));
router.post("/", validateItem, WrapAsync(createItem));
router.delete("/:id", WrapAsync(removeItem));

export default router;