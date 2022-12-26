import styled from "styled-components";
import { useEffect } from "react";
import searchImg from "../../User/Img/search.png";

const TotalRankingComponent = ({ totalData, totalRanking }) => {
  useEffect(() => {
    totalRanking();
  }, []);
  return (
    <TotalRankBox>
      <div className="ranking-title">종합 랭킹</div>
      <div>
        <div>유저 랭킹 검색</div>
        <input />
        <button>
          <img src={searchImg} alt="야호" />
        </button>
      </div>
      <TotalRankingList>
        <h5>
          종합 랭킹의 경우 게시글 건당 3, 댓글 건당 1로 점수를 매겨 나온
          순위입니다.
        </h5>
        <ul className="ranking-header">
          <li>순위</li>
          <li>유저 정보</li>
          <li>서버</li>
          <li>총점</li>
        </ul>
      </TotalRankingList>
      <TotalRankingRaw>
        {totalData?.map((item, idx) => {
          return (
            <ul key={`rankingList${idx}`} className="ranking-data">
              <li key={`ranking${idx}`} className="ranking">
                {idx + 1}
              </li>
              <UserImgBox key={`userInfo${idx}`} item={item} />
              <li key={`server${idx}`} className="server-name">
                {item.userWorld}
              </li>
              <li key={`count${idx}`} className="count-data">
                {item.count}
              </li>
            </ul>
          );
        })}
      </TotalRankingRaw>
    </TotalRankBox>
  );
};
export default TotalRankingComponent;

const UserImgBox = ({ item }) => {
  return (
    <>
      <li className="user-img">
        <img src={`http://localhost:8080/api/download${item.profileImg}`}></img>
        <div>{item.tempUserName}</div>
      </li>
    </>
  );
};

const TotalRankBox = styled.div`
  padding: 0;
  margin: 0 auto;
  box-sizing: border-box;
  width: 1200px;

  .ranking-title {
    font-size: 25px;
  }
`;

const TotalRankingList = styled.div`
  width: 100%;
  .ranking-header {
    padding-top: 20px;
    width: 100%;
    display: flex;
    list-style: none;
    justify-content: space-around;
  }

  .ranking-header li:first-child {
    width: 15%;
  }

  .ranking-header li:nth-child(2) {
    width: 45%;
  }

  .ranking-header li:nth-child(3) {
    width: 30%;
  }

  .ranking-header li:last-child {
    width: 10%;
  }
`;

const TotalRankingRaw = styled.div`
  .ranking-data {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;

    width: 100%;
  }

  .ranking {
    width: 15%;
  }

  .user-img {
    width: 45%;
    display: flex;
    column-gap: 5%;
    align-items: center;
    img {
      width: 10%;
      height: 50px;
    }
  }

  .server-name {
    width: 30%;
  }

  .count-data {
    width: 10%;
  }
`;
