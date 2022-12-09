import styled from "styled-components";
import hanz from "../Img/shortcut_maple_hanz.png";
import facebook from "../Img/shortcut_facebook.png";
import twitter from "../Img/shortcut_twitter.png";
import youtube from "../Img/shortcut_youtube.png";

import "../CSS/shortcut.css";

const Shortcut = () => {
  return (
    <ShortcutComponent>
      <div className={"shortcut_innerBox"}>
        <div className="flexBox">
          <img src={hanz} />{" "}
          <HorizontalCenterBox>
            <a href="#" target={"_blank"}>
              <span className="shortcut_smallLink">Android</span>
            </a>
          </HorizontalCenterBox>{" "}
          <HorizontalCenterBox>
            <a href="#" target={"_blank"}>
              <span className="shortcut_smallLink">ios</span>
            </a>
          </HorizontalCenterBox>
        </div>
        <div>
          <img src={facebook} />
        </div>
        <div>
          <img src={twitter} />
        </div>
        <div>
          <img src={youtube} />
        </div>
      </div>
    </ShortcutComponent>
  );
};
export default Shortcut;

const ShortcutComponent = styled.div`
  background-color: rgb(238, 238, 238);
  display: flex;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const HorizontalCenterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  margin-right: 5px;
`;
