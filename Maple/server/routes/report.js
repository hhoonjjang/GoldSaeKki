import multer from "multer";
import fs from "fs";
import { Router } from "express";
const router = Router();

router.post("/uploadBugReport", async (req, res) => {
  try {
    console.log(req.body);
    res.send(req.body);
  } catch (err) {
    console.error(err);
    res.send(req.body);
  }
});

export default router;
