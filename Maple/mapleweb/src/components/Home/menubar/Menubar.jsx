import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import logo from "../Img/goldsaekki-logo2.png";

import { useMemo, useState } from "react";

const Menubar = () => {
  const [BGColor, setBGColor] = useState(false);
  const [headerScroll, setHeaderScroll] = useState(false);
  const changeColorOn = () => {
    setBGColor(true);
  };
  const changeColorOff = () => {
    setBGColor(false);
  };

  const menu = ["뉴스", "랭킹", "커뮤니티", "고객지원"];

  const dropDownMenu = [
    ["공지사항", "업데이트", "이벤트", "캐시샵 공지", "메이플 알림판"],
    ["종합 랭킹", "게시판 랭킹", "댓글 랭킹"],
    [
      "자유게시판",
      "정보게시판",
      "토론게시판",
      "연재소설",
      "금쪽이아트",
      "이벤트게시판",
    ],
    ["도움말/1:1문의", "버그악용/불법프로그램 신고"],
  ];

  const routeAddress = ["News", "Ranking", "Community/Free", "Support/Service"];

  const routeAddressSubGroup = [
    ["/", "/", "/", "/", "/"],
    ["/Ranking", "/Ranking/BoardRanking", "/Ranking/CommentRanking"],
    [
      "/Community/Free",
      "/Community/Information",
      "/Community/TopicDiscussion",
      "/Community/Art",
      "/Community/Coordination",
    ],
    ["/Support/Service", "/Support/BugReport"],
  ];

  window.onscroll = () => {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
      setHeaderScroll(true);
    } else {
      setHeaderScroll(false);
    }
  };

  const menuVersion2 = useMemo(() => {
    return menu.map((item, index) => {
      return (
        <li className="menubar_item_outsideLi" key={`outsideLi${index}`}>
          <Link to={`/${routeAddress[index]}`}>
            {/* /가 붙으면 root부터 찾는다. */}
            <span className="menubar_item_outsideLi_text">{item}</span>
          </Link>
          <ul className="menubar_dropdown">
            {dropDownMenu.map((item2, index2) => {
              return (
                <li key={`dropdown_${index}_${index2}`}>
                  <Link to={routeAddressSubGroup[index][index2]}>
                    {dropDownMenu[index][index2]}
                  </Link>
                  {/* 나중에 메뉴바의 상세한 하위 영역명이 정해지면 그 때 입력한다. */}
                </li>
              );
            })}
          </ul>
        </li>
      );
    });
  }, []);

  const location = useLocation();
  return (
    <MenubarComponent
      className={`${BGColor ? "menubar_bgOn" : "menubar_bgOff"} ${
        headerScroll ? "headerScroll_on" : "headerScroll_off"
      }`}
    >
      <div className="menubar_innerBox">
        {location.pathname == "/login" || location.pathname == "/regist" ? (
          <></>
        ) : (
          <div className="menubar_logobox">
            <Link to={"/"}>
              <img src={logo} alt="Logo" />
            </Link>
          </div>
        )}

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
          */}
          {/* map()돌려서 짧게 나오는 것하고 깡으로 길게 박아넣는 것 중 원하는 것 선택합시다... */}
        </ul>
      </div>
    </MenubarComponent>
  );
};
export default Menubar;

const MenubarComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 999999;
  padding-top: 20px;

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  &.headerScroll_on {
    position: fixed;
    background-color: rgb(47, 47, 59);
    height: 64px;

    .menubar_logobox {
      top: -12px;
    }

    .menubar_logobox img {
      width: 50px;
      border-radius: 50%;
    }
  }

  &.headerScroll_off {
    position: absolute;

    .menubar_logobox img {
      width: 110px;
      border-radius: 50%;
    }

    .menubar_item {
      padding-top: 20px;
    }
  }

  &.headerScroll_off .menubar_item.on {
    transform: translateY(-10px);
    transition: transform 0.2s linear;
  }

  &.headerScroll_off .menubar_item.off {
    transform: translateY(10px);
    transition: transform 0.2s linear;
  }

  &.menubar_bgOn {
    background-color: rgb(43, 43, 55);
    transition: background-color 0.2s linear;
    z-index: 999999;
    height: 310px;
  }

  &.menubar_bgOff {
    transition: background-color 0.2s linear;
    z-index: 100000;
  }

  .menubar_innerBox {
    min-width: 1200px;
    height: 100%;
    display: flex;
    position: relative;
  }

  .menubar_logobox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
  }

  .menubar_item {
    position: absolute;
    right: 0px;
    flex: 1;
    display: flex;
    justify-content: space-between;
  }

  .menubar_item:hover .menubar_dropdown {
    display: block;
  }

  .menubar_item:hover .menubar {
    background-color: rgb(43, 43, 55);
  }

  .menubar_item_outsideLi {
    width: 260px;
    position: relative;
    text-align: center;
  }

  .menubar_item_outsideLi_text:hover {
    color: #f68500;
  }

  .menubar_item_outsideLi_text {
    font-size: 22px;
    color: white;
    font-weight: bold;
  }

  .menubar_dropdown {
    display: none;
    position: absolute;
    font-size: 13px;
    width: 100%;
    padding-inline-start: 0px;
    padding-top: 20px;
  }

  .menubar_dropdown li {
    text-align: center;
    padding-top: 7px;
    padding-bottom: 7px;
  }
  .menubar_dropdown li a {
    width: 100%;
    color: #a7acbc;
  }
  .menubar_dropdown li a:hover {
    color: #f68500;
  }
`;
