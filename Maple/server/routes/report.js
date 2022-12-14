import multer from "multer";
import fs from "fs";
import { Router } from "express";
import db from "../models/index.js";
const router = Router();
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/");
  },
  filename: function (req, file, cb) {
    let ext = file.originalname.split(".");
    ext = ext[ext.length - 1];
    cb(null, `${Date.now()}.${ext}`);
  },
});
const upload = multer({ storage: storage });
router.post(
  "/uploadBugReport",
  upload.fields([{ name: "reportFile" }]),
  async (req, res) => {
    try {
      const reportFile = req.files.reportFile[0].filename;
      const { reportTitle, reportSelect, contentsText } = req.body;
      console.log(req.files.reportFile[0].filename);
      const tempReport = await db.Report.create({
        reportFile: reportFile,
        reportTitle: reportTitle,
        reportSelect: reportSelect,
        contentsText: contentsText,
      });
      console.log(req.body);
      res.send(req.body);
    } catch (err) {
      console.error(err);
      res.send(req.body);
    }
  }
);

router.post("/request", async (req, res) => {
  const tempRequest = await db.Report.findAll({
    order: [["id", "DESC"]],
  });
  console.log(tempRequest);
  res.send(tempRequest);
});

export default router;
