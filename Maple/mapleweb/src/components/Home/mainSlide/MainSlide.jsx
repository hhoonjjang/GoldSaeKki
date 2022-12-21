import React, { useMemo, useState } from "react";

import slideBackground from "../Img/main_slide_background.png";

import img0 from "../Img/main_slide_img_0.jpg";
import img1 from "../Img/main_slide_img_1.jpg";
import img2 from "../Img/main_slide_img_2.jpg";
import img3 from "../Img/main_slide_img_3.jpg";
import img4 from "../Img/main_slide_img_4.jpg";
import img5 from "../Img/main_slide_img_5.jpg";
import img6 from "../Img/main_slide_img_6.jpg";

import "../CSS/mainSlide.css";
import { useEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";
const MainSlide = () => {
  const [imgArr] = useState([
    { img: img0 },
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
  ]);
  // 슬라이드에 올라올 이미지 목록

  const [currSlide, setCurrSlide] = useState(1);
  // 현재 슬라이드 순서

  const [bool, setBool] = useState(true);
  // 왼쪽 버튼인지 오른쪽 버튼인지 판별한다.

  const [allSlide] = useState(2);
  // 원래는 서버에 연결해서 SlideContainer에서 적당히 받아오지만 임시로 3를 주었다.

  const [currSlideTranslate, setCurrSlideTranslate] = useState(0);

  const container = useRef();
  // 캐러셀
  const [slideFocus, setSlideFocus] = useState(1);
  const onlyUpdateCurrSlide = useRef(true);
  const onlyUpdateCurrSlideTranslate = useRef(true);
  // useEffect가 mount될 떄 작동하지 않도록 해주는 state변수

  // useEffect(() => {
  //   setInterval(() => {
  //     setCurrSlide((state) => state + 1);
  //     // currP가 fresh한 상태로 있어야 한다.
  //   }, 5000);
  // }, []);
  // 5초마다 다음 슬라이드로 이동

  useEffect(() => {
    if (onlyUpdateCurrSlide.current) {
      onlyUpdateCurrSlide.current = false;
      // useEffect(()=>{},[state변수])로 적더라도 state에 변동이 있을 때와 mount되었을 때 작동해버린다. 그것을 방지하기 위해 mount될 때는 작동하지 않도록 하였다.
    } else {
      console.log("currSlide 변동 : ", currSlide);
      if (currSlide > allSlide) {
        console.log("currSlide > allSlide : ", currSlide);
        // 캐러셀 첫 페이지로 가야한다. 케러셀의 마지막에 도달했을 경우
        setCurrSlide(1);
        setCurrSlideTranslate(0);
      } else if (currSlide < 1) {
        console.log("currSlide < 1 : ", currSlide);
        // 캐러셀 마지막 페이지로 가야한다. 캐러셀의 첫 번째 항목에서 이전으로 가고 싶어하는 경우
        setCurrSlide(allSlide);
        setCurrSlideTranslate(currSlideTranslate + 100 / allSlide - 1);
      } else {
        if (bool) {
          // 오른쪽 버튼일 때
          setCurrSlideTranslate(currSlideTranslate + 100 / allSlide);
        } else if (!bool) {
          // 왼쪽 버튼일 때
          console.log(currSlideTranslate);
          console.log(100 / allSlide);
          console.log(currSlideTranslate - 100 / allSlide);
          setCurrSlideTranslate(currSlideTranslate - 100 / allSlide);
        }
      }
    }
  }, [currSlide]);

  useEffect(() => {
    if (onlyUpdateCurrSlideTranslate.current) {
      onlyUpdateCurrSlideTranslate.current = false;
      // mount 실행 방지
    } else {
      if (currSlideTranslate > 99) {
        console.log(setCurrSlideTranslate(0));
        setCurrSlideTranslate(0);
        // 최대 길이에 도달했는데 다음으로 넘어가려고 했을 때
      } else if (currSlideTranslate < 0) {
        // 1일 때 이전으로 넘어가려고 했을 때 최대로
        console.log("현재 currSlideTranslate : ", currSlideTranslate);
        console.log("100 / allSlide : ", 100 / allSlide);
        setCurrSlideTranslate(100 - 100 / allSlide);
      } else {
        // 1이전으로 가는 것도 아니고 최대 페이지 이후로 가려는 것도 아닐 경우
        console.log(
          "container.current.style.transform = `translate(-",
          `${currSlideTranslate}%)`
        );
        container.current.style.transform = `translate(-850px)`;
      }
    }
  }, [currSlideTranslate]);
  // 캐러셀을 이동시킨다.

  const listItems = useMemo(() => {
    // const tempCount = parseInt((imgArr.length - 1) / 4) + 1;
    return imgArr.map((item, index) => {
      return (
        <div key={`slideItem-${index}`} className={"carousel_slide_item"}>
          <img key={`img-${index}`} src={item.img} alt="" />
        </div>
      );
    });
  }, [imgArr]);
  return (
    <MainSlideComponent>
      <CarouselBackground bgImg={""}></CarouselBackground>
      <Carousel>
        <div className="carousel_innerBox">
          <div className="carousel_btn">
            <div className="carousel_btn_innerBox">
              <div
                onClick={() => {
                  if (slideFocus % 4 == 0) {
                    setBool(false);
                    setCurrSlide(
                      (state) => (state + imgArr.length - 1) % imgArr.length
                    );
                  } else setSlideFocus(slideFocus - 1);
                }}
              >
                <svg width="20px" height="20px">
                  <polyline
                    points="20,0 0,10 20,20"
                    file="none"
                    stroke="black"
                    strokeWidth="1"
                  />
                </svg>
              </div>
              &nbsp;&nbsp;
              <div>{slideFocus}</div>
              &nbsp;/&nbsp;
              <div>{imgArr.length}</div>
              &nbsp;&nbsp;
              <div
                onClick={() => {
                  if (slideFocus % 4 == 0) {
                    setBool(true);
                    setCurrSlide((state) => (state + 1) % imgArr.length);
                  } else setSlideFocus(slideFocus + 1);
                }}
              >
                <svg width="20px" height="20px">
                  <polyline
                    points="0,0 20,10 0,20"
                    file="none"
                    stroke="black"
                    strokeWidth="1"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="carousel_slide">
            <div className="carousel_slide_itemBox" ref={container}>
              {listItems}
            </div>
          </div>
        </div>
      </Carousel>
    </MainSlideComponent>
  );
};

export default MainSlide;

const MainSlideComponent = styled.div`
  position: relative;
  height: 560px;

  * {
    box-sizing: border-box;
    word-break: break-all;
    text-overflow: ellipsis;
  }
  body {
    margin: 0;
  }
`;

const CarouselBackground = styled.div``;

const Carousel = styled.div`
  width: 100%;
  background-image: url(${slideBackground});
  position: absolute;
  bottom: 0px;
  background-repeat: no-repeat;

  .carousel_innerBox {
    width: 1040px;
    padding-top: 20px;
    padding-left: 100px;
    padding-right: 100px;
    padding-bottom: 20px;

    .carousel_btn {
      justify-content: space-between;
      font-weight: bold;
      padding-bottom: 5px;
    }
    .carousel_btn_innerBox {
      display: flex;
    }
    .carousel_slide {
      width: 100%;
      overflow: hidden;
    }
    .carousel_slide_itemBox {
      display: flex;
      width: 99999px;
      /* justify-content: space-between; */
      transition: transform 0.5s;
    }
    .carousel_slide_item {
      width: 210px;
      display: flex;
    }
    .carousel_slide_itemBox img {
      width: 100px;
    }
  }
`;
