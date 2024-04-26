import express from "express";
import { updateUser, userController } from "../controllers/user.controller.js";
import { verifyToken } from "../utilis/verifyUser.js";
const router = express.Router();
router.get("/test", userController);
router.post("/update/:id", verifyToken,updateUser);
export default router;
