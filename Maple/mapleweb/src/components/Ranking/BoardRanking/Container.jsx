import BoardRankingComponent from "./Component";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BoardRankingContainer = () => {
  const [rankingData, setRankingData] = useState([]);
  const [serverData, setServerData] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const navigate = useNavigate();

  const boardRanking = () => {
    axios.post("/api/rank/viewBoard").then((data) => {
      console.log(data);
      // data.data = 배열
      // data.data[0].tempUserName
      setRankingData(data.data);
      console.log(rankingData); // 배열안에 객체 형식
    });
  };

  const serverBoardRanking = (server) => {
    console.log(server);
    axios
      .post("/api/rank/boardServer", { server: server })
      .then((data) => {
        console.log(data);
        setServerData(data.data);
      });
  };

  const searchBoardRanking = (searchData) => {
    console.log("서치했다");
    axios
      .post(
        "/api/rank/searchBoard?searchData=" + searchData,
        { searchData: searchData }
        // post에서도 쿼리쓸 수 있다. 다음 코드와 같음 객체형식으로 보내주는건 post
      )
      .then((data) => {
        setSearchList(data.data);
        navigate(`/Ranking/BoardRanking/${searchData}`);
      });
  };

  return (
    <BoardRankingComponent
      boardRanking={boardRanking}
      rankingData={rankingData}
      serverBoardRanking={serverBoardRanking}
      serverData={serverData}
      searchBoardRanking={searchBoardRanking}
      searchList={searchList}
    />
  );
};

export default BoardRankingContainer;
