// /api
import { Router } from "express";

import user from "./user.js";

import report from "./report.js";
import board from "./board.js";
import comment from "./comment.js";

const router = Router();


router.use("/user", user);
router.use("/join", user);

router.use("/report", report);
router.use("/board", board);
router.use("/comment", comment);


export default router;
