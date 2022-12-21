import { Router } from "express";
import jwt from "jsonwebtoken";
import Cryptojs from "crypto-js";
import db from "../models/index.js";
const router = Router();

router.post("/regist", async (req, res) => {
  try {
    console.log(req.body);
    await db.Admin.create({
      adminId: req.body.id,
      adminPw: Cryptojs.SHA256(req.body.password).toString(),
      adminName: req.body.adminName,
    }).then((data) => {
      console.log(data.dataValues);
      res.send(req.body);
    });
    // .catch((err) => {
    //   console.log("err", err);
    //   res.send("중복");
    // });
  } catch (err) {
    console.error(err);
    res.send(err);
  }
});

router.post("/login", async (req, res) => {
  console.log(req.body);
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
    res.end();
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
  console.log(tempId);
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
      category: req.body.text,
    });
    res.end();
  } catch (err) {
    console.error(err);
    res.end();
  }
});

router.post("/addtext", async (req, res) => {
  try {
    const category = await db.Category.findAll();
    res.send(category);
  } catch (err) {
    console.error(err);
    res.end();
  }
});

router.post("/delcategory", async (req, res) => {
  console.log(req.body.category);
  await db.Category.destroy({
    where: {
      category: req.body.category,
    },
  });
  res.end();
});

router.post("/editcategory", async (req, res) => {
  console.log(req.body.category);
  await db.Category.update(
    {
      category: req.body.category,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  );
  res.end();
});

router.post("/helptext", async (req, res) => {
  try {
    console.log(req.body);
    const tempHelp = req.body;
    const tempCategory = await db.Category.findOne({
      where: {
        category: tempHelp.category,
      },
    });
    const tempHelpText = await db.Helptext.create({
      text: tempHelp.text,
    });
    console.log(tempCategory);
    tempCategory.addHelp(tempHelpText);

    res.end();
  } catch (err) {
    console.error(err);
    res.end();
  }
});

router.post("/deltext", async (req, res) => {
  console.log(req.body);
  await db.Helptext.destroy({
    where: {
      text: req.body.text,
    },
  });
  res.end();
});

router.post("/edittext", async (req, res) => {
  console.log(req.body.text);
  await db.Helptext.update(
    {
      text: req.body.text,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  );
  res.end();
});

router.post("/addchild", async (req, res) => {
  try {
    const helpText = await db.Helptext.findAll();
    res.send(helpText);
  } catch (err) {
    console.error(err);
    res.end();
  }
});

router.post("/addchildtext", async (req, res) => {
  try {
    const tempChild = req.body;
    const tempHelpText = await db.Helptext.findOne({
      where: {
        text: tempChild.category,
      },
    });
    const tempHelpTextChild = await db.Helptextchild.create({
      textChild: tempChild.text,
    });

    tempHelpText.addChild(tempHelpTextChild);
    res.end();
  } catch (err) {
    console.error(err);
    res.end();
  }
});

router.post("/displaychild", async (req, res) => {
  const textChild = await db.Helptextchild.findAll({
    include: { model: db.Helptext },
  });
  res.send(textChild);
});

router.post("/delchild", async (req, res) => {
  console.log(req.body.text);
  await db.Helptextchild.destroy({
    where: { textChild: req.body.text },
  });
  res.end();
});

router.post("/editchild", async (req, res) => {
  console.log(req.body.text);
  await db.Helptextchild.update(
    {
      textChild: req.body.text,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  );
  res.end();
});

export default router;
