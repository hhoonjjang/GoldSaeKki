import MainSlide from "./mainSlide/MainSlide";
import MainGamestart from "./mainGamestart/MainGamestart";
import MainNotice from "./mainNotice/MainNotice";
import MainCommunity from "./mainCommunity/MainCommunity";
import MainInfo from "./mainInfo/MainInfo";

import Shortcut from "./shortcut/Shortcut";

import archive from "./Img/main_archive.png";

import styled from "styled-components";

const HomeComponet = () => {
  return (
    <div className="Home_wrapper">
      <div className="Home_content">
        {/* <MainSlide></MainSlide> */}
        {/* 임시로 배너를 채워넣었습니다 */}
        {/* <MainSlide></MainSlide> */}
        <TempSlide></TempSlide>
        <MainGamestart></MainGamestart>
        <MainNotice />
        <MainCommunity />
        <MainArchive>
          <img src={archive} />
        </MainArchive>
        <MainInfo></MainInfo>
        <Shortcut></Shortcut>
      </div>
    </div>
  );
};

export default HomeComponet;

const TempSlide = styled.div`
  height: 560px;
`;

const MainArchive = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 60px;
  padding-bottom: 60px;
`;
