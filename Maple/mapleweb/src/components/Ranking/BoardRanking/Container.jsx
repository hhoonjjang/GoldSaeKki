import BoardRankingComponent from "./Component";
import axios from "axios";
import { useState } from "react";

const BoardRankingContainer = () => {
  const [rankingData, setRankingData] = useState([]);
  const boardRanking = () => {
    axios.post("http://localhost:8080/api/rank/viewBoard").then((data) => {
      console.log(data);
      // data.data = 배열
      // data.data[0].tempUserName
      setRankingData(data.data);
      console.log(rankingData); // 배열안에 객체 형식
    });
  };
  return (
    <BoardRankingComponent
      boardRanking={boardRanking}
      rankingData={rankingData}
    />
  );
};

export default BoardRankingContainer;
