import CommentRankingComponent from "./Component";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CommentRankingContainer = () => {
  const [commentData, setCommentData] = useState([]);
  const [serverData, setServerData] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const navigate = useNavigate();

  const commentRanking = () => {
    axios.post("/api/rank/viewComment").then((data) => {
      console.log(data);
      setCommentData(data.data);
    });
  };

  const serverCommentRanking = (server) => {
    console.log(server);
    axios.post("/api/rank/commentServer", { server: server }).then((data) => {
      console.log(data);
      setServerData(data.data);
    });
  };

  const searchCommentRanking = (searchData) => {
    console.log("서치했다");
    axios
      .post(
        "/api/rank/searchComment?searchData=" + searchData,
        { searchData: searchData }
        // post에서도 쿼리쓸 수 있다. 다음 코드와 같음 객체형식으로 보내주는건 post
      )
      .then((data) => {
        setSearchList(data.data);
        navigate(`/Ranking/CommentRanking/${searchData}`);
      });
  };

  return (
    <CommentRankingComponent
      commentData={commentData}
      commentRanking={commentRanking}
      serverCommentRanking={serverCommentRanking}
      serverData={serverData}
      searchCommentRanking={searchCommentRanking}
      searchList={searchList}
    />
  );
};

export default CommentRankingContainer;
