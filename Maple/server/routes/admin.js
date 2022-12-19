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
  res.send(tempAdmin.name);
});

router.post("/logout", (req, res) => {
  res.clearCookie("admin");
  res.send({ message: "로그아웃" });
});

router.post("/list", async (req, res) => {
  const tempList = await db.Admin.findAll();
  res.send(tempList);
});

router.post("/delete", async (req, res) => {
  const tempId = req.body;
  await db.Admin.destroy({
    where: {
      id: tempId.idx,
    },
  });
  res.end();
});

router.post("/category", async (req, res) => {
  try {
    const category = await db.Category.create({
      category: req.body.value,
    });
    res.end();
  } catch (err) {
    console.error(err);
  }
  console.log(req.body);
});

router.post("/addtext", async (req, res) => {
  try {
    const category = await db.Category.findAll();
    console.log("에드텍스트");
    console.log(category);
    console.log("에드텍스트");
    res.send(category);
  } catch (err) {
    console.error(err);
  }
});

export default router;
