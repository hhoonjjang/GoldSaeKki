import Menubar from "./menubar/Menubar";
import MainInfo from "./mainInfo/MainInfo";
import MainSlide from "./mainSlide/MainSlide";
import Shortcut from "./shortcut/Shortcut";

const HomeComponet = () => {
  return (
    <div>
      <Menubar></Menubar>
      <MainSlide></MainSlide>
      <MainInfo></MainInfo>
      <Shortcut></Shortcut>
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
