import { Router } from "express";
import db from "../models/index.js";

const router = Router();

router.post("/viewBoard", (req, res) => {
  const tempArr = [];
  let tempUserName = "";
  db.Board.findAll({ order: [["userName", "DESC"]] }).then((data) => {
    data?.map((item) => {
      if (tempUserName != item.dataValues.userName) {
        tempUserName = item.dataValues.userName;
        tempArr.push({
          tempUserName: tempUserName,
          count: 1,
          userWorld: item.dataValues.userWorld,
          profileImg: "",
        });
      } else {
        tempArr[tempArr.length - 1].count += 1;
      }
    });
    tempArr.sort((a, b) => b.count - a.count);
    console.log(tempArr);
    let count = 0;
    for (let i = 0; i < tempArr.length; i++) {
      db.User.findOne({ where: { userName: tempArr[i].tempUserName } }).then(
        (data) => {
          console.log("아이디찾음", data);
          count++;
          tempArr[i].profileImg = data.dataValues.profileImg;
          //data.dataValues.profileImg
        }
      );
    }
    const intervalId = setInterval(() => {
      if (tempArr.length <= count) {
        clearInterval(intervalId);
        res.send(tempArr);
      }
    }, 100);
  });
});

router.post("/viewComment", (req, res) => {
  const tempArr = [];
  let tempUserName = "";
  db.Comment.findAll({ order: [["userName", "DESC"]] }).then((data) => {
    data?.map((item) => {
      if (tempUserName != item.dataValues.userName) {
        tempUserName = item.dataValues.userName;
        tempArr.push({
          tempUserName: tempUserName,
          count: 1,
          userWorld: item.dataValues.userWorld,
          profileImg: "",
        });
      } else {
        tempArr[tempArr.length - 1].count += 1;
      }
    });
    tempArr.sort((a, b) => b.count - a.count);
    console.log(tempArr);
    let count = 0;
    for (let i = 0; i < tempArr.length; i++) {
      db.User.findOne({ where: { userName: tempArr[i].tempUserName } }).then(
        (data) => {
          console.log("아이디찾음", data);
          count++;
          tempArr[i].profileImg = data.dataValues.profileImg;
          //data.dataValues.profileImg
        }
      );
    }
    const intervalId = setInterval(() => {
      if (tempArr.length <= count) {
        clearInterval(intervalId);
        res.send(tempArr);
      }
    }, 100);
  });
});

export default router;
