import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../Img/maple_logo.png";
import "../CSS/menubar.css";
import { useState } from "react";

const Menubar = () => {
  const [BGColor, setBGColor] = useState(false);
  const changeColorOn = () => {
    setBGColor(true);
  };
  const changeColorOff = () => {
    setBGColor(false);
  };
  return (
    <MenubarComponent className={BGColor ? "menubar_bgOn" : "menubar_bgOff"}>
      <div className="menubar_innerBox">
        <div className="menubar_logobox">
          <Link to={"/"}>
            <img src={logo} alt="Logo" />
            {/* 임시로 놓는 로고입니다. 제대로 된 로고를 넣을 예정 */}
          </Link>
          {/* 로고 */}
        </div>

        <ul
          className="menubar_item"
          onMouseOver={() => {
            changeColorOn();
          }}
          onMouseLeave={() => {
            changeColorOff();
          }}
        >
          <li className="menubar_item_outsideLi">
            <Link to={"/"}>뉴스</Link>
            <ul className="menubar_dropdown">
              <li>
                <Link to={"/"}>공지사항</Link>
              </li>
              <li>
                <Link to={"/"}>업데이트</Link>
              </li>
              <li>
                <Link to={"/"}>이벤트</Link>
              </li>
              <li>
                <Link to={"/"}>캐시샵 공지</Link>
              </li>
              <li>
                <Link to={"/"}>메이플 알림판</Link>
              </li>
            </ul>
          </li>
          <li className="menubar_item_outsideLi">
            <Link to={"/"}>가이드</Link>
            <ul className="menubar_dropdown">
              <li>
                <Link to={"/"}>게임정보</Link>
              </li>
              <li>
                <Link to={"/"}>퀘스트정보</Link>
              </li>
              <li>
                <Link to={"/"}>직업소개</Link>
              </li>
              <li>
                <Link to={"/"}>확률형 아이템</Link>
              </li>
              <li>
                <Link to={"/"}>확률형 아이템 결과</Link>
              </li>
              <li>
                <Link to={"/"}>NEXON NOW</Link>
              </li>
            </ul>
          </li>
          <li className="menubar_item_outsideLi">
            <Link to={"/"}>랭킹</Link>
            <ul className="menubar_dropdown">
              <li>
                <Link to={"/"}>월드 랭킹</Link>
              </li>
              <li>
                <Link to={"/"}>유니온 랭킹</Link>
              </li>
              <li>
                <Link to={"/"}>업적 랭킹</Link>
              </li>
              <li>
                <Link to={"/"}>명예의 전당</Link>
              </li>
              <li>
                <Link to={"/"}>유니온 아레나</Link>
              </li>
            </ul>
          </li>
          <li className="menubar_item_outsideLi">
            <Link to={"/"}>커뮤니티</Link>
            <ul className="menubar_dropdown">
              <li>
                <Link to={"/"}>자유게시판</Link>
              </li>
              <li>
                <Link to={"/"}>정보게시판</Link>
              </li>
              <li>
                <Link to={"/"}>토론게시판</Link>
              </li>
              <li>
                <Link to={"/"}>메이플 아트</Link>
              </li>
              <li>
                <Link to={"/"}>메이플 코디</Link>
              </li>
            </ul>
          </li>
          <li className="menubar_item_outsideLi">
            <Link to={"/"}>미디어</Link>
            <ul className="menubar_dropdown">
              <li>
                <Link to={"/"}>웹툰</Link>
              </li>
              <li>
                <Link to={"/"}>영상</Link>
              </li>
              <li>
                <Link to={"/"}>음악</Link>
              </li>
              <li>
                <Link to={"/"}>아트웍</Link>
              </li>
            </ul>
          </li>
          <li className="menubar_item_outsideLi">
            <Link to={"/"}>고객지원</Link>
            <ul className="menubar_dropdown">
              <li>
                <Link to={"/"}>도움말/1:1문의</Link>
              </li>
              <li>
                <Link to={"/"}>아이템 봉인해제</Link>
              </li>
              <li>
                <Link to={"/"}>버그악용/불법프로그램 신고</Link>
              </li>
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
  justify-content: center;
  height: 560px;
`;
