// /api/board
import { Router } from "express";
const router = Router();

import db from "../models/index.js";
import { Op } from "sequelize";
import fs from "fs";
import multer from "multer";
import cloudinary from "cloudinary";


// 이미지 업로드를 위한 multer 기본 세팅
// npm install multer, npm install cloudinary
// multer 기본 세팅 : 저장 경로와 파일명을 설정한다.
const storage = multer.diskStorage({
  filename: (req, res, callback) => {
    callback(null, Date.now() + file.originalname);
  },
  // 저장 위치는 cloudinary를 사용할 것이므로 설정해주지 않음
  // destination: function (req, file, cb) {
  //   cb(null, "public/");
  // },
});
// 이미지 확장자 필터
const imageFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png)$/i)) {
    return callback(new Error("이미지 파일만 넣어주세요."), false);
  }
  callback(null, true);
}
// 이미지 업로드
const upload = multer({ storage: storage, fileFilter: imageFilter });
// 저장 위치 설정 https://cloudinary.com/ : 무료 이미지 저장 공간
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOAD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


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

// 카테고리와 월드가 일치하는 게시글 목록
router.post("/getWorldList", async (req, res) => {
  try {
    // 게시판 db의 category가 유저가 보낸 category와 같은 것을 모두 찾아온다.
    const tempBoards = await db.Board.findAll({
      where: {
        category: req.body.category,
        world: req.body.world,
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
      where: { id: req.body.boardId },
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
    db.Board.update(
      {
        title: req.body.title,
        world: req.body.world,
        tags: req.body.tags,
        contents: req.body.contents,
      },
      {
        where: { id: req.body.boardId },
      }
    );
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
  db.Board.update(
    {
      eyeCount: newEyeCount,
    },
    {
      where: { id: req.body.boardId },
    }
  );
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
  db.Board.update(
    {
      likeCount: newLikeCount,
    },
    {
      where: { id: req.body.boardId },
    }
  );
  res.end();
});

// 게시글 댓글수 +1
router.post("/commentCountUp", async (req, res) => {
  // 해당 게시글의 공감수를 가져와
  const tempBoard = await db.Board.findOne({
    where: {
      id: req.body.boardId,
    },
  });
  // 1 증가시키고
  const tempCommentCount = tempBoard?.dataValues?.commentCount;
  const newCommentCount = tempCommentCount + 1;
  // 그 값을 해당 게시글에 다시 업데이트 해준다.
  db.Board.update(
    {
      commentCount: newCommentCount,
    },
    {
      where: { id: req.body.boardId },
    }
  );
  res.end();
});
// 게시글 댓글수 -1
router.post("/commentCountDown", async (req, res) => {
  // 해당 게시글의 공감수를 가져와
  const tempBoard = await db.Board.findOne({
    where: {
      id: req.body.boardId,
    },
  });
  // 1 감소시키고
  const tempCommentCount = tempBoard?.dataValues?.commentCount;
  const newCommentCount = tempCommentCount - 1;
  // 그 값을 해당 게시글에 다시 업데이트 해준다.
  db.Board.update(
    {
      commentCount: newCommentCount,
    },
    {
      where: { id: req.body.boardId },
    }
  );
  res.end();
});

// 공감수가 높은 게시글 30개 (이슈 태그를 가져오기 위함)
router.post("/getLikeSevenBoards", async (req, res) => {
  // console.log("하이하이");
  try {
    // 태그가 있으면서 공감수가 높은 게시글 7개 목록을 가져온다.
    const tempBoard = await db.Board.findAll({
      order: [["likeCount", "DESC"]],
      limit: 40,
      // offset: 1,
    });
    res.send(tempBoard);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});



router.post("/mainCommunity", async (req, res) => {
  try {
    const result = await db.sequelize.query(
      'SELECT * FROM (SELECT * FROM maple.boards where category="자유게시판" or category="정보게시판" or category="토론게시판" or category="연재소설" ORDER BY created_at DESC LIMIT 50)as t group by t.category',
      { type: db.Sequelize.QueryTypes.SELECT }
      // 없으면 배열에 두개가 들어간다. 이유는 불명.
    );
    res.send({
      status: 200,
      result: result,
    });
  } catch (error) {
    console.error(error);
    res.send({ status: 400 });
  }
});

router.post("/reportboard",async(req,res)=>{
 const tempBoard= await db.Board.findOne({
    where:{id:req.body.id}
  })
  const counting=tempBoard.dataValues.report
  await db.Board.update(
    {
      report:counting+1,
    },{
    where:{id:req.body.id}
  })
  res.send("성공적으로 신고가 되었습니다.");
})



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
