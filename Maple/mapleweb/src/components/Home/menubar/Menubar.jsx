import styled from "styled-components";
import { Link } from "react-router-dom";

import "../CSS/menubar.css";

// 3. onClick을 부모 컴포넌트(RegistContainer)로부터 props로 받는다.
const Menubar = () => {
  return (
    <MenubarComponent>
      <span>
        <img src={""} alt="Logo"></img>
        {/* 로고 */}
      </span>

      <div className="menubar_item">
        <ul>
          <li>
            뉴스
            <ul className="menubar_dropdown">
              <li>공지사항</li>
              <li>업데이트</li>
              <li>이벤트</li>
              <li>캐시샵 공지</li>
              <li>메이플 알림판</li>
            </ul>
          </li>
          <li>
            가이드
            <ul className="menubar_dropdown">
              <li>게임정보</li>
              <li>퀘스트정보</li>
              <li>직업소개</li>
              <li>확률형 아이템</li>
              <li>확률형 아이템 결과</li>
              <li>NEXON NOW</li>
            </ul>
          </li>
          <li>
            랭킹
            <ul className="menubar_dropdown">
              <li>월드 랭킹</li>
              <li>유니온 랭킹</li>
              <li>업적 랭킹</li>
              <li>명예의 전당</li>
              <li>유니온 아레나</li>
            </ul>
          </li>
          <li>
            커뮤니티
            <ul className="menubar_dropdown">
              <li>자유게시판</li>
              <li>정보게시판</li>
              <li>토론게시판</li>
              <li>메이플 아트</li>
              <li>메이플 코디</li>
            </ul>
          </li>
          <li>
            미디어
            <ul className="menubar_dropdown">
              <li>웹툰</li>
              <li>영상</li>
              <li>음악</li>
              <li>아트웍</li>
            </ul>
          </li>
          <li>
            고객지원
            <ul className="menubar_dropdown">
              <li>도움말/1:1문의</li>
              <li>아이템 봉인해제</li>
              <li>버그악용/불법프로그램 신고</li>
            </ul>
          </li>
        </ul>
      </div>
    </MenubarComponent>
  );
};
export default Menubar;

const MenubarComponent = styled.div`
  display: flex;
`;
