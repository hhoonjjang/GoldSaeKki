import styled from "styled-components";
import { useEffect } from "react";
import searchImg from "../../User/Img/search.png";

const TotalRankingComponent = () => {
  return (
    <TotalRankBox>
      <h3>종합 랭킹</h3>
      <div>
        <div>유저 랭킹 검색</div>
        <input />
        <button>
          <img src={searchImg} alt="야호" />
        </button>
      </div>
    </TotalRankBox>
  );
};
export default TotalRankingComponent;

const TotalRankBox = styled.div``;
