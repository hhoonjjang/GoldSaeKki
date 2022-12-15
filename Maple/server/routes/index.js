import { Router } from "express";
// import jwt from "jsonwebtoken";
import user from "./user.js";
import report from "./report.js";
const router = Router();

// router.use("/", (req, res, next) => {
//   try {
// const decodeToken = jwt.verify(req.cookies.login, process.env.JWT_KEY);
// next();
//   } catch (error) {
// console.error(error);
// res.send(error);
//   }
// });

router.use("/user", user);

router.use("/report", report);

export default router;
