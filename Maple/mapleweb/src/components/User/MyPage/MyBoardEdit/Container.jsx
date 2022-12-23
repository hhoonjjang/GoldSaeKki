import axios from "axios";
import MyBoardEditComponent from "./Component";
import { useSelector } from "react-redux";
import { useState } from "react";

const MyBoardEditContainer = () => {
  const currUser = useSelector((state) => state.user.currUserName);
  const [boardList, setBoardList] = useState([]);
  console.log(currUser);
  const getMyboard = () => {
    console.log("게시글 정보 불러왔다.");
    axios
      .post("http://localhost:8080/api/user/board", { currUser: currUser })
      .then((data) => {
        console.log(data);
        setBoardList(data.data);
      });
  };
  return <MyBoardEditComponent getMyBoard={getMyboard} boardList={boardList} />;
};

export default MyBoardEditContainer;
