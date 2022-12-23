import { useEffect } from "react";
import styled from "styled-components";
import searchImg from "../../User/Img/search.png";

const BoardRankingComponent = ({ boardRanking, rankingData }) => {
  useEffect(() => {
    boardRanking();
  }, []);
  return (
    <BoardRankBox>
      <h3>게시판 랭킹</h3>
      <div>
        <div>유저 랭킹 검색</div>
        <input />
        <button>
          <img src={searchImg} alt="돋보기" />
        </button>
      </div>
      <BoardRankingList>
        <ul className="ranking-header">
          <li>순위</li>
          <li>유저 정보</li>
          <li>서버</li>
          <li>게시글 갯수</li>
        </ul>
        <BoardRankingRaw>
          {rankingData?.map((item, idx) => {
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
        </BoardRankingRaw>
      </BoardRankingList>
    </BoardRankBox>
  );
};
export default BoardRankingComponent;

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

const BoardRankBox = styled.div`
  padding: 0;
  margin: 0 auto;
  box-sizing: border-box;
  width: 1200px;
`;

const BoardRankingList = styled.div`
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

const BoardRankingRaw = styled.div`
  .ranking-data {
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
  }

  .ranking {
    width: 15%;
  }

  .user-img {
    width: 45%;
    display: flex;
    align-items: center;
    img {
      width: 50%;
    }
  }

  .server-name {
    width: 30%;
  }

  .count-data {
    width: 10%;
  }
`;
