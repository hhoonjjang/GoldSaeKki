// /api/board
import { Router } from "express";
const router = Router();

import db from "../models/index.js";
import { Op } from "sequelize";

// 게시글 추가
router.post("/create", async (req, res) => {
  console.log(req.body);

  try {
    // 유저 db에서 아이디를 찾아 관계 맺은 키값을 가져와서
    const tempUser = await db.User.findOne({
      where: {
        userId: req.body.userId,
      },
    });

    // 유저 테이블 전체가 출력된다.
    // console.log(tempUser);

    // 일단 게시판 DB에 값을 집어넣고
    const tempBoard = await db.Board.create({
      title: req.body.title,
      world: req.body.world,
      category: req.body.category,
      contents: req.body.contents,
      tags: req.body.tags,
    });

    // 연결관계 맺은 놈에도 같이 값 집어넣어 준다.
    tempUser.addBoard(tempBoard);

    res.send({ status: 200 });
  } catch (error) {
    console.log(error);
    res.send({ status: 400 });
  }

  // 유저 아이디는 데이더베이스 관계 맺은 것 때문에
  // 컬럼 이름이 user_Id 이므로 user_Id로 적어줘야 함
  // 유저 아이디 : 로그인 정보에서 받아오기
  // 근데 유저 아이디 값이 db에 안 들어가는 상태이다.
});

router.post("/mainCommunity", async (req, res) => {
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
