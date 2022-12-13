import Menubar from "./menubar/Menubar";
import Header from "./header/HeaderComponent";
import MainInfo from "./mainInfo/MainInfo";
import MainSlide from "./mainSlide/MainSlide";
import archive from "./Img/main_archive.png";
import Shortcut from "./shortcut/Shortcut";
import Footer from "./footer/Footer";
import styled from "styled-components";
import "./CSS/home.css";
import MainCommunity from "./mainCommunity/MainCommunity";
const HomeComponet = () => {
  return (
    <div className="Home_wrapper">
      <div className="Home_content">
        {/* <Header></Header> */}
        {/* <MainSlide></MainSlide> */}
        {/* 임시로 배너를 채워넣었습니다 */}
        <MainCommunity></MainCommunity>
        <div className="main_archive">
          <img src={archive} />
        </div>
        <MainInfo></MainInfo>
        <Shortcut></Shortcut>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomeComponet;

const TempDiv = styled.div`
  // height: 420px;
  margin-top: 140px;
`;
