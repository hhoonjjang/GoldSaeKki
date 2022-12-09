import Menubar from "./menubar/Menubar";
import MainInfo from "./mainInfo/MainInfo";
import MainSlide from "./mainSlide/MainSlide";
import Shortcut from "./shortcut/Shortcut";
import Footer from "./footer/Footer";
import styled from "styled-components";
import "./CSS/home.css";
const HomeComponet = () => {
  return (
    <div className="Home_wrapper">
      <div className="Home_content">
        <Menubar></Menubar>
        {/* <MainSlide></MainSlide> */}
        <TempDiv>ff</TempDiv>
        {/* 임시로 배너를 채워넣었습니다 */}
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
