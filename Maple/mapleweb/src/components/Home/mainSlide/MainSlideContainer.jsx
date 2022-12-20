import MainSlideComponent from "./MainSlideComponent";

import img0 from "../Img/main_slide_img_0.jpg";
import img1 from "../Img/main_slide_img_1.jpg";
import img2 from "../Img/main_slide_img_2.jpg";
import img3 from "../Img/main_slide_img_3.jpg";
import img4 from "../Img/main_slide_img_4.jpg";
import img5 from "../Img/main_slide_img_5.jpg";
import img6 from "../Img/main_slide_img_6.jpg";
import img7 from "../Img/main_slide_img_7.jpg";
import img8 from "../Img/main_slide_img_8.jpg";

import bgImg0 from "../Img/main_slide_bgImg_0.jpg";
import bgImg1 from "../Img/main_slide_bgImg_1.jpg";
import bgImg2 from "../Img/main_slide_bgImg_2.jpg";
import bgImg3 from "../Img/main_slide_bgImg_3.jpg";
import bgImg4 from "../Img/main_slide_bgImg_4.jpg";
import bgImg5 from "../Img/main_slide_bgImg_5.jpg";
import bgImg6 from "../Img/main_slide_bgImg_6.jpg";
import bgImg7 from "../Img/main_slide_bgImg_7.jpg";
import bgImg8 from "../Img/main_slide_bgImg_8.jpg";

import { useState } from "react";

const carouselTitleArr = [
  "금쪽이스토리 X 블랙핑크",
  "돌의 정령을 키워달람!",
  "페어리 브로의 황금마차",
  "금쪽이스토리는 더 나은 미래로 향합니다",
  "",
  "돌의 정령의 나눔 프로젝트",
  "현생 용사를 위한 겨울 금꾸 패키지",
  "",
  "",
];

const carouselTextArr = [
  "금쪽이스토리 X 블랙핑크",
  "돌의 정령을 키워달람!",
  "페어리 브로의 황금마차",
  "",
  "",
  "돌의 정령의 나눔 프로젝트",
  "현생 용사를 위한 겨울 금꾸 패키지",
  "",
  "쓰던대로 쓰고 아케인셰이드 무기",
];

// 본래 DB 페이지에서 찾아와야 합니다.
const MainSlideContainer = () => {
  const [carouselBackgroundArr] = useState([
    bgImg0,
    bgImg1,
    bgImg2,
    bgImg3,
    bgImg4,
    bgImg5,
    bgImg6,
    bgImg7,
    bgImg8,
  ]);

  const [carouselImgArr] = useState([
    img0,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
  ]);

  return (
    <MainSlideComponent
      carouselBackgroundArr={carouselBackgroundArr}
      carouselImgArr={carouselImgArr}
      carouselTitleArr={carouselTitleArr}
      carouselTextArr={carouselTextArr}
    ></MainSlideComponent>
  );
};
export default MainSlideContainer;
