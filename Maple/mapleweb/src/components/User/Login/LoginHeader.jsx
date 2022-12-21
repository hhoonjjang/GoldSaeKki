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
          <div>
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
          <div>
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
          <div>
            <li>월드 랭킹</li>
            <li>유니온 랭킹</li>
            <li>업적 랭킹</li>
            <li>명예의 전당</li>
            <li>유니온 아레나</li>
          </div>
        </ul>
        <ul className="head-title">
          <Link to={"/Community/Free"}>
            <div>커뮤니티</div>
          </Link>
          <div>
            <li>자유게시판</li>
            <li>정보게시판</li>
            <li>토론게시판</li>
            <li>메이플 아트</li>
            <li>메이플 코디</li>
          </div>
        </ul>
        <ul className="head-title">
          <Link to={"/Media"}>
            <div>미디어</div>
          </Link>
          <div>
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
          <div>
            <li>도움말/ 1:1문의</li>
            <li>아이템 봉인해제</li>
            <li>버그악용/불법프로그램 신고</li>
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

  .head-title > div:last-child {
    font-size: 13px;
    color: #a7acbc;
  }

  .head-title > div:last-child > li {
    text-align: center;
    padding: 5px 0;
  }

  .head-title > div:last-child > li:hover {
    color: #f68500;
    cursor: pointer;
  }
`;
