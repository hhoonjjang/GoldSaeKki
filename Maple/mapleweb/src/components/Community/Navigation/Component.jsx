import styled from "styled-components";
// import { Link, Routes, Route } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

// 카테고리 저장을 위한 Redux
import { useDispatch } from "react-redux";
import { action } from "../../../modules/community";

// ##. 네비게이션 컴포넌트 사용 방법
// #1. 사용하고 싶은 파일에서 컴포넌트를 import한다.
// import NavigationComponent from "./Navigation/Component";
// #2. 네비게이션을 사용하고 싶은 부분에 컴포넌트를 넣어준다.
// <NavigationComponent categorys={CATEGORY} />
// #3. 네비게이션 컴포넌트 사용을 위해 상위 컴포넌트(이 컴포넌트를 사용하는 곳)에서
// 이처럼 카테고리와 라우터 주소를 작성하고, categorys라는 이름의 props로 보내주면 된다.
// const CATEGORY = [
//     { name: '자유게시판', label: "Free", link: "/Free" },
//     { name: '정보게시판', label: "Information", link: "/Information" },
//     { name: '토론게시판', label: "TopicDiscussion", link: "/TopicDiscussion" },
//     { name: '메이플아트', label: "Art", link: "/Art" },
//     { name: '메이플코디', label: "Coordination", link: "/Coordination" }
// ];
// #4. 어떤 컴포넌트를 불러올 지는 상위 컴포넌트의 Route를 통해 지정해준다.
// <Routes>
//   <Route path="/Free" element={
//       <img src={FreeImg} alt="임시 자유게시판" />
//   }></Route>
//   ... 등등
// </Routes>

// 만약 호버하면
// 어떤 놈을 호버했는지 번호를 알아내서..
// 나머지 앞부분 놈들 위드를 알아내고, 얼만큼 떨어졌는지 알아내서
//

const NavigationComponent = ({ categorys }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  // 주소 이름은 locationName.current를 통해 가져올 수 있다.
  const locationName = useRef("");
  // 현재 몇 번째 카테고리인지 nowRouterIdx.current를 통해 가져올 수 있다.
  const nowRouterIdx = useRef(0);

  // 페이지 리랜더링
  const [_, render] = useState(true);

  // 라우터 주소가 바뀌면 해당 라우터 이름을 반환한다.
  useEffect(() => {
    render(!_);
    const locationArr = location.pathname.split("/");
    console.log(locationName.current, locationArr);
    locationName.current = locationArr[locationArr.length - 1];
  }, [location]);

  // 현재 라우터 이름이 카테고리의 몇번째인지 알아내 ref에 저장해준다.
  categorys.forEach((category, index) => {
    console.log(locationName.current);
    if (category.label === locationName.current) {
      nowRouterIdx.current = index;
    }
  });

  const [naviWidth, setNaviWidth] = useState(20);

  useEffect(() => {
    console.log(`네비게이션 바 크기 ${naviWidth}으로 바뀜`);
  }, [naviWidth]);

  const [naviLeft, setNaviLeft] = useState(0);

  return (
    <NavigationWrap className="mnb_wrap">
      <NavigationBox className="div_inner2">
        {categorys.map((item, idx) => {
          return (
            <LiBox className="liBox" key={`listbox-${item.label}`}>
              <Link
                key={`list-${item.label}`}
                to={`./${item.label}`}
                className={`${idx === nowRouterIdx.current ? "active" : ""}`}
              >
                <CategoryLi
                  key={`category-${item.label}`}
                  onMouseOver={(e) => {
                    setNaviWidth(e.target.offsetWidth);
                    setNaviLeft(e.target.offsetLeft);
                    console.log(e.target.offsetLeft);
                    console.log(naviLeft);
                  }}
                  onMouseLeave={(e) => {
                  }}
                >
                  {item.name}
                </CategoryLi>
              </Link>
            </LiBox>
          );
        })}

        <CategoryLine
          className="mnb_line"
          style={{ width: `${naviWidth}px`, left: `${naviLeft}px` }}
        ></CategoryLine>
      </NavigationBox>
    </NavigationWrap>
  );
};

export default NavigationComponent;

const NavigationWrap = styled.div`
  font-size: 20px;
  height: 66px;
  background-color: white;
  position: sticky;
  top: 62px;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  z-index: 2;

  width: 100%;
  /* float: left; */

  /* 네비바 반응형 : Wrap */
  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    display: none;
  }
`;

const NavigationBox = styled.div`
  margin: 0 auto;
  width: 1200px;
  height: inherit;
  position: relative;
  overflow: hidden;

  /* 네비바 반응형 : 전체너비 */
  @media screen and (max-width: 1280px) {
    width: 1050px;
  }
  /* PC , 테블릿 가로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 620px;
  }
  /* 테블릿 세로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 650px;
    padding: 0 5px;
  }
  /* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
    width: 440px;
    margin: 0 auto;
    padding: 0 4px;
  }
  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    width: 370px;
    padding: 0 5px;
  }
`;

const LiBox = styled.div`
  height: inherit;
  display: inline-block;
  li {
    font-size: 16px;
    list-style: none;
    cursor: pointer;
    height: inherit;
    line-height: 64px;
    text-align: left;
    background-color: white;
    margin-right: 44px;

    /* 네비바 반응형 : 각각의 항목 */
    @media screen and (max-width: 1280px) {
    }
    /* PC , 테블릿 가로 (해상도 768px ~ 1023px)*/
    @media all and (min-width: 768px) and (max-width: 1023px) {
      margin-right: 24px;
    }
    /* 테블릿 세로 (해상도 768px ~ 1023px)*/
    @media all and (min-width: 768px) and (max-width: 1023px) {
      font-size: 14px;
      margin-right: 24px;
    }
    /* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/
    @media all and (min-width: 480px) and (max-width: 767px) {
      font-size: 12px;
      margin-right: 12px;
    }
    /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
    @media all and (max-width: 479px) {
      font-size: 10.5px;
      margin-right: 7px;
    }
  }
  a {
    color: #666;
    text-decoration: none;
    // a 호버
    &:hover {
      color: #242424;
    }
    /* a중에서 active인 class를 가진 li */
    &.active li {
      color: #333;
      font-weight: 600;
    }
  }
`;

const CategoryLi = styled.li``;

const CategoryLine = styled.span`
  position: absolute;
  bottom: -1px;
  height: 5px;
  background-color: #434343;
  /* 현재는 이렇게 설정해놨음 */
  /* left:32px;  */
  left: 0px;
  transition: all 0.8s;
  /* 기본 위드는 20px으로 설정해놨음 */
  /* width: 20px; */
  /* 현재 카테고리의 위드만큼으로 바꾸기 */
`;
