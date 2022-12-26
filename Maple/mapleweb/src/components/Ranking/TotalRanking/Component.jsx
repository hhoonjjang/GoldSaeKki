import styled from "styled-components";
import { useEffect, useState } from "react";
import searchImg from "../../User/Img/search.png";
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";

const TotalRankingComponent = ({
  totalData,
  totalRanking,
  serverTotalRanking,
  serverData,
  searchTotalRanking,
  searchList,
}) => {
  // 페이징 처리 : 현재 페이지
  const [nowPage, setNowPage] = useState(1);
  // 페이지 변경 함수
  const handlePageChange = (page) => {
    setNowPage(page);
  };
  useEffect(() => {
    totalRanking();
  }, []);

  const [server, setServer] = useState("서버 선택");
  const [searchData, setSearchData] = useState("");
  const route = useParams();

  useEffect(() => {
    serverTotalRanking(server);
  }, [server]);

  let newBoards = [];
  if (serverData) {
    serverData?.map((item, idx) => {
      if (idx >= (nowPage - 1) * 5 && idx < nowPage * 5) {
        newBoards.push(item);
      }
    });
  }
  return (
    <TotalRankBox>
      <div className="ranking-title">종합 랭킹</div>
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
            searchTotalRanking(searchData);
          }}
        >
          <img src={searchImg} alt="야호" />
        </button>
      </div>
      <TotalRankingList>
        <h5>
          종합 랭킹의 경우 게시글 건당 3, 댓글 건당 1로 점수를 매겨 나온
          순위입니다.
        </h5>
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
          <li>총점</li>
        </ul>
      </TotalRankingList>
      {route.sword ? (
        <TotalRankingRaw>
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
        </TotalRankingRaw>
      ) : (
        <TotalRankingRaw>
          {server === "서버 선택"
            ? totalData?.map((item, idx) => {
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
        </TotalRankingRaw>
      )}
      <PagenationWrap>
        <Pagination
          // 현재 페이지
          activePage={nowPage}
          // 띄울 게시글 개수
          itemsCountPerPage={5}
          // 총 게시글 개수
          totalItemsCount={serverData?.length || 0}
          // 표시할 개수
          pageRangeDisplayed={10}
          // 이전을 나타낼 아이콘
          prevPageText={"‹"}
          // 다음을 나타낼 아이콘
          nextPageText={"›"}
          // 페이지네이션 함수
          onChange={handlePageChange}
        />
      </PagenationWrap>
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
    margin-top: 40px;
  }

  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul.pagination li {
    display: inline-block;
    width: 35px;
    height: 35px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }

  ul.pagination li:first-child {
    /* border-radius: 5px 0 0 5px; */
    border-radius: 3px 0 0 3px;
  }

  ul.pagination li:last-child {
    /* border-radius: 0 5px 5px 0; */
    border-radius: 0 3px 3px 0;
  }

  ul.pagination li a {
    text-decoration: none;
    /* color: #337ab7; */
    color: #5e7bcb;
    font-size: 1rem;
  }

  ul.pagination li.active a {
    color: white;
  }

  ul.pagination li.active {
    /* background-color: #337ab7; */
    background-color: #5e7bcb;
  }

  ul.pagination li a:hover,
  ul.pagination li a.active {
    /* color: blue; */
    color: #5e7bcb;
  }

  .page-selection {
    width: 48px;
    height: 30px;
    /* color: #337ab7; */
    color: #5e7bcb;
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

const RankingSelectBox = styled.div`
  .select {
    width: 150px;
    height: 35px;
    border-radius: 3px;
    border: 2px solid lightgray;
  }
`;
const PagenationWrap = styled.div`
  float: left;
  width: 100%;
`;
