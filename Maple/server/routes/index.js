import { Router } from "express";
// import jwt from "jsonwebtoken";
import user from "./user.js";
import report from "./report.js";
import admin from "./admin.js";
const router = Router();


router.use("/user", user);
router.use("/admin", admin);
router.use("/report", report);


export default router;
