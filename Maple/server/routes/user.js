import { Router } from "express";
import jwt from "jsonwebtoken";
import multer from "multer";
import db from "../models/index.js";
import crypto from "crypto-js";
import fs from "fs";

const router = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./upload/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const uploader = multer({ storage: storage });

router.post("/imgUpload", uploader.single("selectimg"), (req, res) => {
  console.log("폼데이터다", req.file.filename);
  res.send(req.file);
});

router.post("/imgchange", (req, res) => {
  console.log("현재 접속 id", req.body); // currUserName, currImg
  db.User.update(
    {
      profileImg: req.body.currImg,
    },
    { where: { userName: req.body.currUser } }
  ).then((data) => {
    router.get(`/download${req.body.currImg}`, (req, res) => {
      fs.readFile("./upload/" + req.body.currImg, (err, data) => {
        res.writeHead(200, { "Content-Type": "img/jpeg; charset=utf-8" });
        res.end(data);
      });
    });
    res.send(`http://localhost:8080/api/download${req.body.currImg}`);
  });
});

router.post("/getImg", (req, res) => {
  console.log("요청", req.body.currUserName);
  console.log("req.body?.currUserName", req.body?.currUserName);
  if (req.body?.currUserName)
    db.User.findOne({ where: { userName: req.body?.currUserName } }).then(
      (data) => {
        console.log("data : ", data);
        console.log("data?.profileImg : ", data?.profileImg);
        if (data?.profileImg) {
          console.log("이미지 정보", data.profileImg);
          res.send(`http://localhost:8080/api/download${data.profileImg}`);
        } else {
          res.send("/Img/catimg.png");
        }
      }
    );
  else {
    res.send("/Img/catimg.png");
  }
});

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
  console.log("쿠키다", req.cookies);
  const decodeToken = jwt.verify(req.cookies.login, process.env.JWT_KEY);
  res.send({
    userInfo: decodeToken,
    loginComplete: 1,
  });
});

router.post("/findId", (req, res) => {
  db.User.findOne({ where: { userName: req.body.nickName } }).then((data) => {
    res.send(data);
  });
});

router.post("/findPw", (req, res) => {
  db.User.update(
    { userPw: crypto.SHA256("goldsaekki!").toString() },
    {
      where: { userId: req.body.findId },
    }
  ).then((data) => {
    console.log("받을데이터", data);
    if (data[0] === 0) {
      res.send({ message: 504 });
    } else {
      res.send({ pw: "goldsaekki!" });
    }
  });
});

router.post("/login", (req, res) => {
  db.User.findOne({
    where: { userId: req.body.loginId },
  })
    .then((data) => {
      console.log("data??", data);
      console.log("data.userPw", data?.userPw);
      console.log("req.body.loginPw", req.body.loginPw);
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
router.post("/clearCookie", (req, res) => {
  db.User.update(
    {
      userName: req.body.changeName,
    },
    { where: { userName: req.body.currUserName } }
  ).then(() => {
    db.User.findOne({ where: { userName: req.body.changeName } }).then(
      (data) => {
        res.clearCookie("login");
        res.send({
          message: "쿠키 삭제 완료",
          changeName: req.body.changeName,
          serverName: data.serverName,
        });
      }
    );
  });
});

router.post("/changename", (req, res) => {
  {
    const token = jwt.sign(
      {
        server: req.body.serverName,
        name: req.body.changeName,
      },
      process.env.JWT_KEY,
      {
        algorithm: "HS256",
        expiresIn: "30m",
        issuer: "goldsaekki",
      }
    );
    res.cookie("login", token, { maxAge: 1800000 });
    const { serverName, changeName } = req.body;
    res.send({
      message: "쿠키생성 완료",
      status: 200,
      data: {
        currServerName: serverName,
        currUserName: changeName,
      },
    });
  }
});

router.post("/signOut", (req, res) => {
  db.User.destroy({ where: { userName: req.body.currUserName } }).then(() => {
    res.send();
  });
});

router.post("/board", (req, res) => {
  console.log("현재 닉네임", req.body.currUser);
  db.Board.findAll({ where: { userName: req.body.currUser } }).then((data) => {
    console.log("찾아온 데이터", data);
    res.send(data);
  });
});

router.post("/comment", (req, res) => {
  console.log("현재 닉네임", req.body.currUser);
  db.Comment.findAll({ where: { userName: req.body.currUser } }).then(
    (data) => {
      console.log("찾아온 데이터", data);
      res.send(data);
    }
  );
});

router.post("/pwchange", (req, res) => {
  db.User.update(
    { userPw: crypto.SHA256(req.body.changePw).toString() },
    { where: { userName: req.body.currUserName } }
  ).then(() => {
    res.clearCookie("login");
    res.send({ message: "비밀번호 잘 바꾸고 쿠키 초기화함" });
  });
});

fs.readFile("./user.json", "utf-8", async function (err, data) {
  const count = await db.User.count();
  if (err) {
    console.error(err.message);
  } else {
    if (data && JSON.parse(data).length > count) {
      JSON.parse(data).forEach((item) => {
        try {
          db.User.create(item);
        } catch (err) {
          console.error(err);
        }
      });
    }
  }
});
export default router;
