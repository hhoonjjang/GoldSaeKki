// /api/board
import { Router } from "express";
const router = Router();

import db from "../models/index.js";
import { Op } from "sequelize";

import fs from "fs";

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
      userWorld: req.body.userWorld,
    });
    // 연결관계 맺은 놈으로 같이 값 집어넣어 연결해준다.
    tempUser.addBoard(tempBoard);
    res.send({ tempBoard, status: 200 });
  } catch (error) {
    console.log(error);
    res.send({ status: 400 });
  }
});

// 카테고리에 해당하는 게시글 목록
router.post("/getList", async (req, res) => {
  try {
    // 게시판 db의 category가 유저가 보낸 category와 같은 것을 모두 찾아온다.
    const tempBoards = await db.Board.findAll({
      where: {
        category: req.body.category,
      },
      order: [["id", "DESC"]],
    });
    res.send(tempBoards);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

// 보드 id에 해당하는 게시글 내용
router.post("/getBoard", async (req, res) => {
  try {
    // 모든 게시글 목록을 가져온다.
    const tempBoard = await db.Board.findAll({
      where: {
        id: req.body.boardId,
      },
    });
    res.send(tempBoard);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

// 게시글 삭제
router.post("/destroy", (req, res) => {
  try {
    db.Board.destroy({
      where: { id: req.body.boardId }
    }).then(() => {
      res.send({ status: 200 });
    });
  } catch (err) {
    console.error(err);
    res.send({ status: 400 });
  }
});

// 게시글 수정
router.post("/update", (req, res) => {
  console.log(req.body.title);
  try {
    // boardId에 해당하는 보드를 수정한다.
    db.Board.update({
      title: req.body.title,
      world: req.body.world,
      tags: req.body.tags,
      contents: req.body.contents
    }, {
      where: { id: req.body.boardId }
    });
    res.send({ status: 200 });
  } catch (err) {
    console.error(err);
    res.send({ status: 400 });
  }
});

// 게시글 조회수 추가
router.post("/eyeCountUpdate", async (req, res) => {
  // 해당 게시글의 조회수를 가져와
  const tempBoard = await db.Board.findOne({
    where: {
      id: req.body.boardId,
    },
  });
  // 1 증가시키고
  const tempEyeCount = tempBoard?.dataValues?.eyeCount;
  const newEyeCount = tempEyeCount + 1;
  // 그 값을 해당 게시글에 다시 업데이트 해준다.
  db.Board.update({
    eyeCount: newEyeCount,
  }, {
    where: { id: req.body.boardId }
  });
  res.end();
});

// 게시글 공감수 추가
router.post("/likeCountUpdate", async (req, res) => {
  // 해당 게시글의 공감수를 가져와
  const tempBoard = await db.Board.findOne({
    where: {
      id: req.body.boardId,
    },
  });
  // 1 증가시키고
  const tempLikeCount = tempBoard?.dataValues?.likeCount;
  const newLikeCount = tempLikeCount + 1;
  // 그 값을 해당 게시글에 다시 업데이트 해준다.
  db.Board.update({
    likeCount: newLikeCount,
  }, {
    where: { id: req.body.boardId }
  });
  res.end();
});




router.post("/mainCommunity", async (req, res) => {
  try {
    const result2 = await db.sequelize.query(
      'SELECT * FROM (SELECT * FROM maple.boards  where category="자유게시판" or category="정보게시판" or category="토론게시판" ORDER BY created_at DESC LIMIT 50)as t group by t.category',
      { type: db.Sequelize.QueryTypes.SELECT }
      // 없으면 배열에 두개가 들어간다. 이유는 불명.
    );
    const result = await db.Board.findAll({});
    // result2는 sql그대로 갖다 넣어서 카멜 케이스가 적용되지않고 스네이크 케이스로 출력된다...

    res.send({
      status: 200,
      result,
    });
  } catch (error) {
    console.error(error);
    res.send({ status: 400 });
  }
});

// fs.readFile("./board.json", "utf-8", async function (err, data) {
//   const count = await db.Board.count();
//   if (err) {
//     console.error(err.message);
//   } else {
//     if (data && JSON.parse(data).length > count) {
//       JSON.parse(data).forEach((item) => {
//         try {
//           db.Board.create(item);
//         } catch (err) {
//           console.error(err);
//         }
//       });
//     }
//   }
// });

export default router;
