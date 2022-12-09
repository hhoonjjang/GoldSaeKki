import Menubar from "./menubar/Menubar";
import MainInfo from "./mainInfo/MainInfo";
import MainSlide from "./mainSlide/MainSlide";
import Shortcut from "./shortcut/Shortcut";
import Footer from "./footer/Footer";

const HomeComponet = () => {
  return (
    <div className="Home_wrapper">
      <div className="Home_content">
        <Menubar></Menubar>
        <MainSlide></MainSlide>
        <MainInfo></MainInfo>
        <Shortcut></Shortcut>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomeComponet;
