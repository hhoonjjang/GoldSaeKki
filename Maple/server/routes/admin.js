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
        ),
        { maxAge: 1800000 }
      );
      const name = tempAdmin.dataValues.adminName;
      res.send({
        name: name,
      });
    }
  } catch (err) {
    console.error(err);
  }
});

router.post("/admincheck", (req, res) => {
  const tempAdmin = jwt.verify(req.cookies.admin, process.env.JWT_KEY);
  console.log("템프어드민");
  console.log(tempAdmin);
  res.send(tempAdmin.name);
});

router.post("/logout", (req, res) => {
  res.clearCookie("admin");
  res.send({ message: "로그아웃" });
});

export default router;
