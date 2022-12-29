import axios from "axios";
import MyBoardEditComponent from "./Component";
import { useSelector } from "react-redux";
import { useState } from "react";

const MyBoardEditContainer = () => {
  const currUser = useSelector((state) => state.user.currUserName);
  console.log("보드의", currUser);
  const [boardList, setBoardList] = useState([]);
  const getMyboard = () => {
    console.log("게시글 정보 불러왔다.");
    axios
      .post("/api/user/board", { currUser: currUser })
      .then((data) => {
        console.log(data);
        setBoardList(data.data);
      });
  };
  return (
    <MyBoardEditComponent
      getMyBoard={getMyboard}
      boardList={boardList}
      currUser={currUser}
    />
  );
};

export default MyBoardEditContainer;
