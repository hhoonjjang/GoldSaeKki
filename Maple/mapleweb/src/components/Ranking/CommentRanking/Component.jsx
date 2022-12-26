import styled from "styled-components";
import searchImg from "../../User/Img/search.png";
import { useEffect } from "react";

const CommentRankingComponent = ({ commentData, commentRanking }) => {
  useEffect(() => {
    commentRanking();
  }, []);
  return (
    <CommentRankBox>
      <h3>댓글 랭킹</h3>
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
export default CommentRankingComponent;

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
