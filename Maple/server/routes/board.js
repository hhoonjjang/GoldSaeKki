// /api/board
import { Router } from "express";
const router = Router();

import db from "../models/index.js";
import { Op } from "sequelize";

// 게시글 추가
router.post("/create", async (req, res) => {
  console.log(req.body);
  try {
    // 유저 db에서 userName이 유저가 보낸 userName과 같은 것을 찾아온다.
    const tempUser = await db.User.findOne({
      where: {
        userName: req.body.userName,
      },
    });
    // 해당 로그인 유저 없으면 리턴
    if (!tempUser) {
      res.send({ status: 401 });
      return;
    }
    // 일단 게시판 DB에 값을 집어넣고
    const tempBoard = await db.Board.create({
      title: req.body.title,
      world: req.body.world,
      category: req.body.category,
      contents: req.body.contents,
      tags: req.body.tags,
    });
    // 연결관계 맺은 놈으로 같이 값 집어넣어 연결해준다.
    tempUser.addBoard(tempBoard);
    res.send({ status: 200 });
  } catch (error) {
    console.log(error);
    res.send({ status: 400 });
  }
});

// 게시글 목록
router.post("/findAll", async (req, res) => {
  try {
    // 게시판 db의 category가 유저가 보낸 category와 같은 것을 모두 찾아온다.
    const tempBoards = await db.Board.findAll({
      where: {
        category: req.body.category,
      },
    });

    // 값을 뽑아오려면 tempBoards[해당번호].dataValues로 가져와야 한다.
    console.log(tempBoards);

    res.send(tempBoards);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

router.post("/mainCommunity", async (req, res) => {
  console.log("메인커뮤니티 받았당");
  try {
    const tempBoard = await db.Board.findAll({
      order: [
        ["createdAt", "DESC"],
        ["category", "DESC"],
      ],
      group: "category",
      where: {
        [Op.or]: [
          { category: "자유게시판" },
          { category: "정보게시판" },
          { category: "토론게시판" },
        ],
      },
    });
    console.log("디비로부터 뭔가 받았다");
    res.send({
      status: 200,
      result: tempBoard,
    });
  } catch (error) {
    console.error(error);
    res.send({ status: 400 });
  }
});

export default router;
