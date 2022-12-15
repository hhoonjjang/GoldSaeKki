import { Router } from "express";
import jwt from "jsonwebtoken";
import Cryptojs from "crypto-js";
import db from "../models/index.js";

const router = Router();

router.post("/regist", async (req, res) => {
  console.log(req.body);
  console.log(Cryptojs.SHA256(req.body.password).toString());
  try {
    console.log("어드민");

    console.log(db.Admin);
    await db.Admin.create({
      adminId: req.body.id,
      adminPw: Cryptojs.SHA256(req.body.password).toString(),
      adminName: req.body.adminName,
    });
    res.end();
  } catch (err) {
    console.error(err);
  }
});

export default router;
