import CommentRankingComponent from "./Component";
import axios from "axios";
import { useState } from "react";

const CommentRankingContainer = () => {
  const [commentData, setCommentData] = useState([]);
  const commentRanking = () => {
    axios.post("http://localhost:8080/api/rank/viewComment").then((data) => {
      console.log(data);
      setCommentData(data.data);
    });
  };
  return (
    <CommentRankingComponent
      commentData={commentData}
      commentRanking={commentRanking}
    />
  );
};

export default CommentRankingContainer;
