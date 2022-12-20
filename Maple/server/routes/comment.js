// /api/comment
import { Router } from "express";
import db from "../models/index.js";
const router = Router();

// 댓글 등록
router.post("/create", async(req,res)=>{

    console.log(req.body);

    try {
        // 댓글을 등록시킨다.
        const commentAdd = await db.Comment.create({
            userName : req.body.userName,
            text : req.body.text,
            boardId : req.body.boardId
        });
        // 연결된 곳에도 추가시켜줌
        // 사용법 : 해당디비에서가져온연결된키.add메서드명(db생성코드)
        // 해당 "유저" 닉네임을 찾아 거기에도 넣어줌 addComment
        const commentUserName = await db.User.findOne({
            userName : req.body.userName
        });
        commentUserName.addComment(commentAdd);

        // 연결된 곳에도 추가시켜줌
        // 해당 보드 아이디를 찾아 거기에도 넣어줌 addBoardComments
        const boardId = await db.Board.findOne({
            id : req.body.boardId
        });
        boardId.addBoardComments(commentAdd);

        res.end();
    } catch (error) {
        console.log(error);
    }
});


export default router;