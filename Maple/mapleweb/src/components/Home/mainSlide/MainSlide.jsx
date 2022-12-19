import React, { useMemo, useState } from "react";

import slideBackground from "../Img/main_slide_background.png";

import img0 from "../Img/main_slide_img_0.jpg";
import img1 from "../Img/main_slide_img_1.jpg";
import img2 from "../Img/main_slide_img_2.jpg";
import img3 from "../Img/main_slide_img_3.jpg";
import img4 from "../Img/main_slide_img_4.jpg";
import img5 from "../Img/main_slide_img_5.jpg";
import img6 from "../Img/main_slide_img_6.jpg";

import bgImg0 from "../Img/main_slide_bgImg_0.jpg";
import bgImg1 from "../Img/main_slide_bgImg_1.jpg";
import bgImg2 from "../Img/main_slide_bgImg_2.jpg";
import bgImg3 from "../Img/main_slide_bgImg_3.jpg";
import bgImg4 from "../Img/main_slide_bgImg_4.jpg";
import bgImg5 from "../Img/main_slide_bgImg_5.jpg";
import bgImg6 from "../Img/main_slide_bgImg_6.jpg";
import bgImg7 from "../Img/main_slide_bgImg_7.jpg";
import bgImg8 from "../Img/main_slide_bgImg_8.jpg";

// import "../CSS/mainSlide.css";
import { useEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";
const MainSlide = () => {
  const [carouselBackgroundArr] = useState([
    { img: bgImg0 },
    { img: bgImg1 },
    { img: bgImg2 },
    { img: bgImg3 },
    { img: bgImg4 },
    { img: bgImg5 },
    { img: bgImg6 },
  ]);

  const [carouselImgArr] = useState([
    { img: img0 },
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
  ]);

  const carouselTextArr = [
    "메이플스토리 X 블랙핑크",
    "돌의 정령을 키워달람!",
    "페어리 브로의 황금마차",
    "",
    "",
    "돌의 정령의 나눔 프로젝트",
    "현생 용사를 위한 겨울 메꾸 패키지",
    "매일매일 귀여운 메이플 친구들!",
    "",
    "쓰던대로 쓰고 아케인셰이드 무기",
  ];

  const [currSlide, setCurrSlide] = useState(0);
  // const [currSlide, setCurrSlide] = useState(1);
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
    } else {
      if (currSlide > allSlide) {
        setCurrSlide(1);
        setCurrSlideTranslate(0);
      } else if (currSlide < 1) {
        setCurrSlide(allSlide);
        setCurrSlideTranslate(currSlideTranslate + 100 / allSlide - 1);
      } else {
        if (bool) {
          setCurrSlideTranslate(currSlideTranslate + 100 / allSlide);
        } else if (!bool) {
          setCurrSlideTranslate(currSlideTranslate - 100 / allSlide);
        }
      }
    }
  }, [currSlide]);

  useEffect(() => {
    if (onlyUpdateCurrSlideTranslate.current) {
      onlyUpdateCurrSlideTranslate.current = false;
    } else {
      if (currSlideTranslate > 99) {
        setCurrSlideTranslate(0);
      } else if (currSlideTranslate < 0) {
        setCurrSlideTranslate(100 - 100 / allSlide);
      } else {
        container.current.style.transform = `translate(-850px)`;
      }
    }
  }, [currSlideTranslate]);

  useEffect(() => {
    console.log(currSlide);
  }, [currSlide]);

  // const listItems = useMemo(() => {
  //   // const tempCount = parseInt((carouselImgArr.length - 1) / 4) + 1;
  //   return carouselImgArr.map((item, index) => {
  //     return (
  //       <div
  //         key={`slideItem-${index}`}
  //         className={`carousel_slide_item ${
  //           (index - 1) % 4 == 0 ? "interval" : ""
  //         }`}
  //       >
  //         <img key={`img-${index}`} src={item.img} alt="" />
  //         <span>{carouselTextArr[index]}</span>
  //       </div>
  //     );
  //   });
  // }, [carouselImgArr]);

  const listItems = useMemo(() => {
    // const tempCount = parseInt((carouselImgArr.length - 1) / 4) + 1;
    return carouselImgArr.map((item, index) => {
      return (
        <div
          key={`slideItem-${index}`}
          className={`carousel_slide_item 
          ${currSlide == index ? "on" : ""} 
          ${(index - 1) % 4 == 0 ? "interval" : ""}`}
        >
          <img key={`img-${index}`} src={item.img} alt="" />
          <span>{carouselTextArr[index]}</span>
        </div>
      );
    });
  }, [carouselImgArr]);
  return (
    <MainSlideComponent>
      <CarouselBackgroundArr
        bgImg={carouselBackgroundArr[currSlide].img}
      ></CarouselBackgroundArr>
      <Carousel>
        <div className="carousel_innerBox">
          <div className="carousel_pageBox">
            <div className="carousel_pageBox_innerBox">
              <div className="carousel_pageBox_innerBox_textBox">
                &nbsp;&nbsp;
                <div className="carousel_pageBox_innerBox_textBox_currNum">
                  {slideFocus}
                </div>
                &nbsp;<span>/</span>&nbsp;
                <div className="carousel_pageBox_innerBox_textBox_AllNum">
                  {carouselImgArr.length}
                </div>
                &nbsp;&nbsp;
              </div>
            </div>
          </div>
          <div className="carousel_slide">
            <div className="carousel_slide_innerBox">
              <div
                className="carousel_slide_innerBox_prevBtn"
                onClick={() => {
                  setBool(false);
                  setCurrSlide(
                    (state) =>
                      (state + carouselImgArr.length - 1) %
                      carouselImgArr.length
                  );
                }}
              >
                <svg width="20px" height="20px" fill="gainsboro">
                  <polyline
                    points="20,0 0,10 20,20"
                    file="none"
                    stroke="black"
                    strokeWidth="1"
                  />
                </svg>
              </div>
              <div className="carousel_slide_itemBox_cover">
                <div className="carousel_slide_itemBox" ref={container}>
                  {listItems}
                </div>
              </div>
              <div
                className="carousel_slide_innerBox_nextBtn"
                onClick={() => {
                  setBool(true);
                  setCurrSlide((state) => (state + 1) % carouselImgArr.length);
                }}
              >
                <svg width="20px" height="20px" fill="gainsboro">
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
        </div>
      </Carousel>
    </MainSlideComponent>
  );
};

export default MainSlide;

const MainSlideComponent = styled.div`
  position: relative;
  height: 560px;
`;

const CarouselBackgroundArr = styled.div`
  background-image: url(${(state) => state.bgImg});
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
`;

const Carousel = styled.div`
  width: 100%;
  height: 93px;
  background-image: url(${slideBackground});
  position: absolute;
  bottom: 0px;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;

  .carousel_innerBox {
    width: 1200px;
    padding-top: 20px;
    position: relative;

    .carousel_pageBox {
      justify-content: space-between;
      font-weight: bold;
      width: 100%;
      padding-bottom: 5px;
      display: flex;
      justify-content: center;
      position: absolute;
      top: 0px;

      .carousel_pageBox_innerBox {
        display: flex;

        .carousel_pageBox_innerBox_textBox {
          display: flex;
          font-size: 20px;

          .carousel_pageBox_innerBox_textBox_currNum {
            color: #f68500;
          }
          span {
            color: gainsboro;
          }
          .carousel_pageBox_innerBox_textBox_AllNum {
            color: gainsboro;
          }
        }
      }
    }

    .carousel_slide {
      width: 100%;
      overflow: hidden;
      position: absolute;
      bottom: 20px;

      .carousel_slide_innerBox {
        display: flex;
        justify-content: space-between;
        width: 100%;

        .carosel_slide_innerBox_prevBtn {
          width: 30px;
        }

        .carousel_slide_itemBox_cover {
          width: 1100px;
          overflow: hidden;

          .carousel_slide_itemBox {
            display: flex;
            // width: 99999px;
            /* justify-content: space-between; */
            transition: transform 0.5s;

            .carousel_slide_item {
              min-width: 210px;
              max-width: 210px;
              margin-left: 17px;
              display: flex;

              img {
                width: 100px;
                // height: 100%;
                max-width: 210px;
              }

              span {
                color: #cccccc;
                font-size: 12px;
                max-width: 100px;
                margin-left: 10px;
                word-break: keep-all;
              }
            }
            .carousel_slide_item.interval {
              margin-right: 180px;
            }
            .carousel_slide_item.on {
              img {
                border: 2px solid orange;
              }
              span {
                color: white;
              }
            }
          }
        }

        .carousel_slide_itemBox_nextBtn {
          width: 30px;
        }
      }
    }
  }
`;
