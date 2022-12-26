import styled from "styled-components";
import searchImg from "../../User/Img/search.png";
import { useEffect } from "react";

const CommentRankingComponent = ({ commentData, commentRanking }) => {
  useEffect(() => {
    commentRanking();
  }, []);
  return (
    <CommentRankBox>
      <div className="ranking-title">댓글 랭킹</div>
      <div>
        <div>유저 랭킹 검색</div>
        <input />
        <button>
          <img src={searchImg} alt="검색" />
        </button>
      </div>
      <CommentRankingList>
        <ul className="ranking-header">
          <li>순위</li>
          <li>유저 정보</li>
          <li>서버</li>
          <li>댓글 갯수</li>
        </ul>
        <CommentRankingRaw>
          {commentData?.map((item, idx) => {
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
        </CommentRankingRaw>
      </CommentRankingList>
    </CommentRankBox>
  );
};
export default TotalRankingComponent;

const UserImgBox = ({ item }) => {
  return (
    <>
      <li className="user-img">
        <img src={`/api/download${item.profileImg}`}></img>
        <div>{item.tempUserName}</div>
      </li>
    </>
  );
};

const CommentRankBox = styled.div`
  padding: 0;
  margin: 0 auto;
  box-sizing: border-box;
  width: 1200px;
`;

const CommentRankingList = styled.div`
  width: 100%;
  .ranking-header {
    padding-top: 20px;
    width: 100%;
    display: flex;
    list-style: none;
    justify-content: space-around;
    margin: 0;

    @media only screen and (max-width: 768px) {
      font-size: 13px;
      & > li:last-child {
        padding: 5px 5px;
      }
    }

    @media only screen and (max-width: 480px) {
      font-size: 11px;
    }

    @media only screen and (max-width: 420px) {
      font-size: 10px;
    }
  }

  .ranking-header > li {
    background-color: #5e7bcb;
    padding: 10px;
    color: white;
    font-weight: 600;
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

const CommentRankingRaw = styled.div`
  border: 1px solid lightgray;
  border-bottom: none;

  @media only screen and (max-width: 1280px) {
    & > ul > li:nth-child(2) > img {
      width: 50px;
    }
  }
  .ranking-data {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    border-bottom: 1px solid lightgray;

    width: 100%;
  }

  .ranking-data > li {
    padding: 10px;
  }

  .ranking {
    width: 15%;
    font-size: 24px;
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
