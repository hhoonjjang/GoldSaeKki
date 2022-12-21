// /api/comment
import { Router } from "express";
import db from "../models/index.js";
const router = Router();

// 댓글 등록
router.post("/create", async(req,res)=>{

    console.log(req.body.boardId); //2

    try {
        // 댓글을 등록시킨다.
        const commentAdd = await db.Comment.create({
            userName : req.body.userName,
            text : req.body.text,
            // boardId : req.body.boardId,
            userWorld : req.body.userWorld
        });

        // 연결된 곳에도 추가시켜줌
        // 사용법 : 해당디비에서가져온연결된키.add메서드명(db생성코드)
        // 해당 "유저" 닉네임을 찾아 거기에도 넣어줌 addComment
        const commentUserName = await db.User.findOne({
            where : {userName : req.body.userName}
        });
        commentUserName.addComment(commentAdd);

        // 연결된 곳에도 추가시켜줌
        // 해당 보드 아이디를 찾아 거기에도 넣어줌 addBoardComments
        const boardId = await db.Board.findOne({
            where : {id : req.body.boardId}
        });
        boardId.addBoardComments(commentAdd);

        res.send({status : 200});
        res.end();
    } catch (error) {
        console.log(error);
        res.send({status : 400});
    }
});

// 댓글 목록 불러오기(findAll)
router.post("/getComment", async(req,res)=>{
    console.log(req.body);
    try {
        const nowCommentList = await db.Comment.findAll({
            where : {
                boardId : req.body.boardId
            }
        });
        res.send(nowCommentList);
        res.end();
    } catch (error) {
        console.log(error);
    }
});

// 댓글 삭제 destroy
router.post("/destroy", async(req,res)=>{
    console.log(req.body);
    try {
        await db.Comment.destroy({
            where : {id : req.body.commentId},
        }).then(()=>{
            res.send({status : 200});
        });
        res.end();
    } catch (error) {
        console.log(error);
        res.send({status : 400});
    }
});

// 댓글 수정 update
router.post("/update", (req,res)=>{
    try {
        db.Comment.update({
            // 내용만 바꿔준다.
            // 새로운 내용값을 받아온다.
            // 수정시 원래 텍스트가 있었던 곳에
            // 댓글 입력 인풋을 조그맣게 만들어준다.
            // 기존의 값은 받아와 그 값으로 넣어준다.
        }, {
            // comment id 보내줘야 함
            where : {id : req.body.commentId}
        });

        res.end();
    } catch (error) {
        console.log(error);
    }
});


export default router;
