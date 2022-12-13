import { Router } from "express";
import user from "./user.js";
import report from "./report.js";
const router = Router();


router.use("/user", user);

router.use("/report", report);
router.use("/join", user);


export default router;
