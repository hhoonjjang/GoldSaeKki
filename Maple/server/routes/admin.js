import { Router } from "express";
import jwt from "jsonwebtoken";
import Cryptojs from "crypto-js";
import db from "../models/index.js";

const router = Router();

router.post("/regist", async (req, res) => {
  try {
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

router.post("/login", async (req, res) => {
  try {
    const tempAdmin = await db.Admin.findOne({
      where: { adminId: req.body.id },
    });
    console.log(tempAdmin.dataValues.adminPw);
    console.log(Cryptojs.SHA256(req.body.password).toString());
    if (
      tempAdmin.dataValues.adminPw ==
      Cryptojs.SHA256(req.body.password).toString()
    ) {
      res.cookie(
        "admin",
        jwt.sign(
          {
            id: tempAdmin.dataValues.adminId,
            name: tempAdmin.dataValues.adminName,
          },
          process.env.JWT_KEY,
          {
            algorithm: "HS256",
            issuer: "jjh",
          }
        )
      );
      res.send({
        name: tempAdmin.dataValues.adminName,
      });
    }
  } catch (err) {
    console.error(err);
  }
});

export default router;
