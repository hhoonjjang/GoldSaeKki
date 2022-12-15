import { Router } from "express";
import jwt from "jsonwebtoken";

const router = Router();

import db from "../models/index.js";

router.post("/getUser", (req, res) => {
  db.User.findAll().then((data) => {
    res.send(data);
  });
});

router.post("/regist", (req, res) => {
  db.User.create({
    userId: req.body.userId,
    userPw: req.body.userPw,
    userName: req.body.userName,
    serverName: req.body.server,
    profileImg: "catimg.png",
  }).then((data) => {
    res.send(req.body);
  });
});

router.post("/logincheck", (req, res) => {
  console.log(req.cookies.login); // cookies.쿠키명
  const decodeToken = jwt.verify(req.cookies.login, process.env.JWT_KEY);
  res.send({
    userInfo: decodeToken,
    loginComplete: 1,
  });
});

router.post("/login", (req, res) => {
  db.User.findOne({
    where: { userId: req.body.loginId },
  })
    .then((data) => {
      if (data) {
        if (data.userPw === req.body.loginPw) {
          const token = jwt.sign(
            {
              server: data.serverName,
              name: data.userName,
            },
            process.env.JWT_KEY,
            {
              algorithm: "HS256",
              expiresIn: "30m",
              issuer: "goldsaekki",
            }
          );
          // res.cookie("login", token, { httpOnly: true });
          res.cookie("login", token, { maxAge: 1800000 });
          // res.cookie("login", token, { maxAge: 5000 });
          const { serverName, userName } = data;
          res.send({
            message: "쿠키생성 완료",
            status: 200,
            data: {
              currServerName: serverName,
              currUserName: userName,
            },
          });
          console.log("로그인 완료");
        } else {
          res.send({ message: "잘못된 비밀번호입니다.", status: 501 });
        }
      } else {
        res.send({ message: "존재하지 않는 ID입니다.", status: 502 });
      }
    })
    .catch((err) => {
      console.error(err);
    });
});

router.post("/logout", (req, res) => {
  res.clearCookie("login");
  res.send({ message: "쿠키 삭제 완료", status: 200 });
});

export default router;
