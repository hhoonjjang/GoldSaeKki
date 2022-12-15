// /api
import { Router } from "express";

// import jwt from "jsonwebtoken";
import user from "./user.js";

import report from "./report.js";
import board from "./board.js";
import comment from "./comment.js";

import admin from "./admin.js";
const router = Router();


router.use("/user", user);


router.use("/board", board);
router.use("/comment", comment);
router.use("/admin", admin);
router.use("/report", report);


export default router;
