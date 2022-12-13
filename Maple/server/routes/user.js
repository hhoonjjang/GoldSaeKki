import { Router } from "express";
import jwt from "jsonwebtoken";

const router = Router();

import db from "../models/index.js";

router.post("/regist", (req, res) => {
  db.User.create({
    userId: req.body.userId,
    userPw: req.body.userPw,
    userName: req.body.userName,
    profileImg: "catimg.jpg",
  }).then((data) => {
    res.send(req.body);
  });
});

router.post("/login", (req, res) => {
  db.User.findOne({
    where: { userId: req.body.loginId },
  })
    .then((data) => {
      if (data) {
        if (data.userPw === req.body.loginPw) {
          res.cookie(
            "login",
            jwt.sign(
              {
                id: data.userId,
                name: data.userName,
                pw: data.userPw,
              },
              process.env.JWT_KEY,
              {
                algorithm: "HS256",
                expiresIn: "60m",
                issuer: "goldsaekki",
              }
            )
          );
          res.send({
            name: data.userName,
            loginComplete: 1,
          });
          console.log("로그인 완료");
        } else {
          res.send({ message: "잘못된 비밀번호입니다.", status: 500 });
        }
      } else {
        res.send({ message: "존재하지 않는 ID입니다.", status: 500 });
      }
    })
    .catch((err) => {
      console.error(err);
    });
});

export default router;

// .then((data) => {
//   console.log("로그인성공");
// });
