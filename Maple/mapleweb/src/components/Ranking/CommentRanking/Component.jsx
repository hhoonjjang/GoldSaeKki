import styled from "styled-components";
import { useEffect, useState } from "react";
import searchImg from "../../User/Img/search.png";
import { useParams } from "react-router-dom";

const TotalRankingComponent = ({
  commentRanking,
  commentData,
  serverCommentRanking,
  serverData,
  searchCommentRanking,
  searchList,
}) => {
  useEffect(() => {
    commentRanking();
  }, []);

  const [server, setServer] = useState("서버 선택");
  const [searchData, setSearchData] = useState("");
  const route = useParams();

  useEffect(() => {
    serverCommentRanking(server);
  }, [server]);

  return (
    <CommentRankBox>
      <div className="ranking-title">댓글 랭킹</div>
      <div>
        <div>유저 랭킹 검색</div>
        <input
          type={"text"}
          value={searchData}
          onInput={(e) => {
            setSearchData(e.target.value);
          }}
        />
        <button
          onClick={() => {
            searchCommentRanking(searchData);
          }}
        >
          <img src={searchImg} alt="야호" />
        </button>
      </div>
      <CommentRankingList>
        <RankingSelectBox>
          <select
            name="server"
            className="select"
            onChange={(e) => {
              setServer(e.target.value);
              console.log("셋서버", e.target.value);
            }}
          >
            <option value="서버 선택">서버 선택</option>
            <option value="리부트">리부트</option>
            <option value="리부트2">리부트2</option>
            <option value="오로라">오로라</option>
            <option value="레드">레드</option>
            <option value="이노시스">이노시스</option>
            <option value="유니온">유니온</option>
            <option value="스카니아">스카니아</option>
            <option value="루나">루나</option>
            <option value="제니스">제니스</option>
            <option value="크로아">크로아</option>
            <option value="베라">베라</option>
            <option value="엘리시움">엘리시움</option>
            <option value="아케인">아케인</option>
            <option value="노바">노바</option>
          </select>
        </RankingSelectBox>
        <ul className="ranking-header">
          <li>순위</li>
          <li>유저 정보</li>
          <li>서버</li>
          <li>댓글 갯수</li>
        </ul>
      </CommentRankingList>
      {route.sword ? (
        <CommentRankingRaw>
          {searchList.length != 0 ? (
            searchList?.map((item, idx) => {
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
            })
          ) : (
            <div>검색 결과가 없습니다.</div>
          )}
        </CommentRankingRaw>
      ) : (
        <CommentRankingRaw>
          {server === "서버 선택"
            ? commentData?.map((item, idx) => {
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
              })
            : serverData?.map((item, idx) => {
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
      )}
    </CommentRankBox>
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

const CommentRankBox = styled.div`
  padding: 0;
  margin: 0 auto;
  box-sizing: border-box;
  width: 1200px;

  .ranking-title {
    font-size: 25px;
    margin-top: 40px;
  }
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

const RankingSelectBox = styled.div`
  .select {
    width: 150px;
    height: 35px;
    border-radius: 3px;
    border: 2px solid lightgray;
  }
`;
