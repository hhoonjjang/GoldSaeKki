import Menubar from "./menubar/Menubar";
import Header from "./header/header";
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
        {/* <Header></Header> */}
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

const TempBox = styled.div`
  width: 100px;
  border-bottom: 1px solid #ebebeb;
  background-color: #f8f8f8;
  box-sizing: border-box;
`;
const TempHeaderBox = styled.div`
  border-bottom: 1px solid #ebebeb;
  height: 62px;
  background-size: contain;
  position: fixed;
  z-index: 1;
`;
const TempHomeBox = styled.div`
  height: 310px;
  padding-top: 62px;
`;
