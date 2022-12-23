import TotalRankingContainer from "../Ranking/TotalRanking/Container";
import CommentRankingContainer from "../Ranking/CommentRanking/Container";
import BoardRankingContainer from "../Ranking/BoardRanking/Container";
import NavigateComp from "../Community/Navigation/Component";

import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { action } from "../../modules/header";
import { useEffect } from "react";
const RankComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action.header("Ranking"));
  }, []);
  const CATEGORY = [
    {
      name: "종합 랭킹",
      label: "",
      link: "/Ranking",
    },
    {
      name: "게시판 랭킹",
      label: "BoardRanking",
      link: "/Ranking",
    },
    {
      name: "댓글 랭킹",
      label: "CommentRanking",
      link: "/Ranking",
    },
  ];

  return (
    <div>
      <NavigateComp categorys={CATEGORY} />

      <Routes>
        <Route path={"/"} element={<TotalRankingContainer />}></Route>
        <Route
          path={"/BoardRanking"}
          element={<BoardRankingContainer />}
        ></Route>
        <Route
          path={"/CommentRanking"}
          element={<CommentRankingContainer />}
        ></Route>
      </Routes>
    </div>
  );
};

export default RankComponent;
