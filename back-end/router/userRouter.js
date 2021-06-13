import express from "express";
import { getUser, getUserProfile } from "../controller/usersController.js";
import { userProtect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/login", getUser);
router.route("/profile").get(userProtect, getUserProfile);

export default router;
