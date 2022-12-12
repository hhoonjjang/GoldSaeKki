import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../Img/maple_logo.png";
import "../CSS/menubar.css";
import { useMemo, useState } from "react";

const Menubar = ({ props }) => {
  const [BGColor, setBGColor] = useState(false);
  const changeColorOn = () => {
    setBGColor(true);
  };
  const changeColorOff = () => {
    setBGColor(false);
  };

  const menu = ["뉴스", "가이드", "랭킹", "커뮤니티", "미디어", "고객지원"];

  const dropDownMenu = [
    ["공지사항", "업데이트", "이벤트", "캐시샵 공지", "메이플 알림판"],
    [
      "게임정보",
      "퀘스트정보",
      "직업소개",
      "확률형 아이템",
      "확률형 아이템 결과",
      "NEXON NOW",
    ],
    ["월드 랭킹", "유니온 랭킹", "업적 랭킹", "명예의 전당", "유니온 아레나"],
    ["자유게시판", "정보게시판", "토론게시판", "메이플 아트", "메이플 코디"],
    ["웹툰", "메이플스토리 서체", "영상", "음악", "아트웍"],
    ["도움말/1:1문의", "아이템 봉인해제", "버그악용/불법프로그램 신고"],
  ];

  const routeAddress = [
    "/news",
    "/guide",
    "/ranking",
    "/community",
    "/media",
    "/support",
  ];

  const menuVersion2 = useMemo(() => {
    return menu.map((item, index) => {
      return (
        <li className="menubar_item_outsideLi">
          <Link to={routeAddress[index]}>
            <span className="menubar_item_outsideLi_text">{item}</span>
          </Link>
          <ul className="menubar_dropdown">
            {dropDownMenu.map((item2, index2) => {
              return (
                <li>
                  <Link to={"/"}>{dropDownMenu[index][index2]}</Link>
                </li>
              );
            })}
          </ul>
        </li>
      );
    });
  }, []);
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
          className={BGColor ? "menubar_item on" : "menubar_item off"}
          onMouseOver={() => {
            changeColorOn();
          }}
          onMouseLeave={() => {
            changeColorOff();
          }}
        >
          {menuVersion2}
          {/* <li className="menubar_item_outsideLi">
            <Link to={"/"}>
              <span className="menubar_item_outsideLi_text">뉴스</span>
            </Link>
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
            <Link to={"/"}>
              <span className="menubar_item_outsideLi_text">가이드</span>
            </Link>
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
            <Link to={"/"}>
              <span className="menubar_item_outsideLi_text">랭킹</span>
            </Link>
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
            <Link to={"/"}>
              <span className="menubar_item_outsideLi_text">커뮤니티</span>
            </Link>
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
            <Link to={"/"}>
              <span className="menubar_item_outsideLi_text">미디어</span>
            </Link>
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
            <Link to={"/"}>
              <span className="menubar_item_outsideLi_text">고객지원</span>
            </Link>
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
          </li> */}
          {/* map()돌려서 짧게 나오는 것하고 깡으로 길게 박아넣는 것 중 원하는 것 선택합시다... */}
        </ul>
      </div>
      {props}
    </MenubarComponent>
  );
};
export default Menubar;

const MenubarComponent = styled.div`
  display: flex;
  justify-content: center;
  height: 310px;
  padding-top: 20px;
`;
