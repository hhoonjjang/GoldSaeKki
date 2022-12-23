import MainSlideContainer from "./mainSlide/MainSlideContainer";
import MainGamestartContainer from "./mainGamestart/MainGamestartContainer";
import MainNoticeContainer from "./mainNotice/MainNoticeContainer";
import MainInfo from "./mainInfo/MainInfo";

import Shortcut from "./shortcut/Shortcut";

import archive from "./Img/main_archive.png";

import styled from "styled-components";
import MainCommunityContainer from "./mainCommunity/MainCommunityContainer";
import MainSearchContainer from "./mainSearch/MainSearchContainer";

const HomeComponet = () => {
  return (
    <div>
      {/* <MainSlide></MainSlide> */}
      {/* 임시로 배너를 채워넣었습니다 */}
      <MainSlideContainer></MainSlideContainer>
      {/* <TempSlide></TempSlide> */}
      <MainGamestartContainer></MainGamestartContainer>
      <MainNoticeContainer></MainNoticeContainer>
      <MainSearchContainer></MainSearchContainer>
      <MainCommunityContainer></MainCommunityContainer>
      <MainArchive>
        <img src={archive} />
      </MainArchive>
      <MainInfo></MainInfo>
      <Shortcut></Shortcut>
    </div>
  );
};

export default HomeComponet;

const TempSlide = styled.div``;

const MainArchive = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 60px;
  padding-bottom: 60px;
`;
