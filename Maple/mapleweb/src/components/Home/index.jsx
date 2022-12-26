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
      <MainSlideContainer></MainSlideContainer>
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

const MainArchive = styled.div`
  @media only screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    padding-top: 60px;
    padding-bottom: 60px;
  }
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;
