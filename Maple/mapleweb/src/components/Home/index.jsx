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
