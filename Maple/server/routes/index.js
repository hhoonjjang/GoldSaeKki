// /api
import { Router } from "express";

// import jwt from "jsonwebtoken";
import user from "./user.js";

import report from "./report.js";
import board from "./board.js";
import comment from "./comment.js";

import admin from "./admin.js";
import support from "./support.js";
import fs from "fs";
const router = Router();

router.use("/user", user);
router.use("/board", board);
router.use("/comment", comment);
router.use("/admin", admin);
router.use("/report", report);
router.use("/support", support);
// 서버에 있는 upload의 폴더의 img들을 읽어오는 함수
// datas는 upload경로의 파일들을 배열로 불러온 것
// 해당 배열을 map으로 돌려서 item들을 읽어온다.
// 맵 돌리면서 router.get으로 통신하는데 그 주소는 /downloaditem이고
// 그 이후에 fs.readFile을 통해 서버에 upload경로에서 item을 읽어온다.
// 읽어온 후에 writeHead로 보내줄 녀석의 타입을 지정해준다.
// 이미지 src자체가 get통신이다.
// 이미지 등록
function changeImg() {
  fs.readdir("./upload", (err, datas) => {
    for (let i = 0; i < datas.length; i++) {
      router.get(`/download${datas[i]}`, (req, res) => {
        fs.readFile("./upload/" + datas[i], (err, data) => {
          res.writeHead(200, { "Content-Type": "img/jpeg; charset=utf-8" });

          res.end(data);
        });
      });
    }
    // datas?.map((item) => {
    //   router.get(`/download${item}`, (req, res) => {
    //     fs.readFile("./upload/" + item, (err, data) => {
    //       res.writeHead(200, { "Content-Type": "img/jpeg; charset=utf-8" });
    //       res.end(data);
    //     });
    //   });
    // });
  });
}
changeImg();

export default router;
