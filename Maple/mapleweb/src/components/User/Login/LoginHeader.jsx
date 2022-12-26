import styled from "styled-components";
import { Link } from "react-router-dom";

const LoginHeadComp = () => {
  return (
    <HeadDiv>
      <HeadList>
        <ul className="head-title">
          <Link to={"/News"}>
            <div>뉴스</div>
          </Link>
          <div className="link-list">
            <li>공지사항</li>
            <li>업데이트</li>
            <li>이벤트</li>
            <li>캐시샵 공지</li>
            <li>메이플 알림판</li>
          </div>
        </ul>
        <ul className="head-title">
          <Link to={"/Guide"}>
            <div>가이드</div>
          </Link>
          <div className="link-list">
            <li>게임정보</li>
            <li>퀘스트정보</li>
            <li>직업소개</li>
            <li>확률형 아이템</li>
            <li>확률형 아이템 결과</li>
            <li>NEXON NOW</li>
          </div>
        </ul>
        <ul className="head-title">
          <Link to={"/Ranking"}>
            <div>랭킹</div>
          </Link>
          <div className="link-list">
            <Link to={"/Ranking"}>
              <li>종합 랭킹</li>
            </Link>
            <Link to={"/Ranking/BoardRanking"}>
              <li>게시판 랭킹</li>
            </Link>
            <Link to={"/Ranking/CommentRanking"}>
              <li>댓글 랭킹</li>
            </Link>
          </div>
        </ul>
        <ul className="head-title">
          <Link to={"/Community/Free"}>
            <div>커뮤니티</div>
          </Link>
          <div className="link-list">
            <Link to={"/Community/Free"}>
              <li>자유게시판</li>
            </Link>
            <Link to={"/Community/Information"}>
              <li>정보게시판</li>
            </Link>
            <Link to={"/Community/TopicDiscussion"}>
              <li>토론게시판</li>
            </Link>
            <Link to={"/Community/Novel"}>
              <li>연재 소설</li>
            </Link>
            <Link to={"/Community/Art"}>
              <li>금쪽이 아트</li>
            </Link>
            <Link to={"/Community/Event"}>
              <li>이벤트게시판</li>
            </Link>
          </div>
        </ul>
        <ul className="head-title">
          <Link to={"/Media"}>
            <div>미디어</div>
          </Link>
          <div className="link-list">
            <li>웹툰</li>
            <li>메이플스토리 서체</li>
            <li>영상</li>
            <li>음악</li>
            <li>아트웍</li>
          </div>
        </ul>
        <ul className="head-title">
          <Link to={"/Support/Service"}>
            <div>고객지원</div>
          </Link>
          <div className="link-list">
            <Link to={"/Support/Service"}>
              <li>도움말/ 1:1문의</li>
            </Link>
            <Link to={"/Support/BugReport"}>
              <li>버그악용/불법프로그램 신고</li>
            </Link>
          </div>
        </ul>
      </HeadList>
    </HeadDiv>
  );
};
export default LoginHeadComp;

const HeadDiv = styled.div`
  background-color: rgba(0, 0, 0, 1);
  position: absolute;
  width: 100vw;
  height: 40vh;
`;

const HeadList = styled.div`
  position: relative;
  display: flex;
  color: white;
  justify-content: space-evenly;
  margin: 50px auto;

  .head-title:hover a > div {
    color: #f68500;
  }

  .head-title a > div {
    color: white;
  }

  .head-title {
    list-style: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  }

  .head-title > a div:first-child {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 15px;
  }

  .head-title > a:hover div:first-child {
    color: #f68500;
    cursor: pointer;
  }

  .link-list > li {
    text-align: center;
    padding: 5px 0;
    font-size: 13px;
    color: #a7acbc;
  }

  .link-list > a > li {
    font-size: 13px;
    color: #a7acbc;
    text-align: center;
    padding: 5px 0;
  }

  .link-list > li:hover {
    color: #f68500;
    cursor: pointer;
  }

  .link-list > a > li:hover {
    color: #f68500;
    cursor: pointer;
  }
`;
