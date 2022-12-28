import axios from "axios";
import { useEffect, useState } from "react"
import UserReportComponent from "./Component"

const CommentArrFun = async (setComment) =>{
 try{
    let commentArr = (await axios.post("http://localhost:8080/api/admin/reportcomment")).data;
    setComment(commentArr);
 }catch(err){
    console.error(err);
 }
}


const UserReportContainerComment=({commentArr,setComment})=>{

    useEffect(()=>{CommentArrFun(setComment)},[])
    useEffect(()=>{CommentArrFun(setComment)},[])
    console.log(commentArr)
    return <UserReportComponent arr={commentArr} a="댓글" c="text" d="boardId"/>
}

export default UserReportContainerComment
