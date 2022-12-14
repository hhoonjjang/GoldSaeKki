import styled from "styled-components";
import hanz from "../Img/shortcut_maple_hanz.png";
import facebook from "../Img/shortcut_facebook.png";
import twitter from "../Img/shortcut_twitter.png";
import youtube from "../Img/shortcut_youtube.png";

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

  a {
    text-decoration-line: none;
  }
  .shortcut_innerBox {
    min-width: 1200px;
    display: flex;
    justify-content: space-between;
    /* padding-top: 10px; */
  }

  .flexBox {
    display: flex;
  }

  .shortcut_smallLink {
    min-width: 65px;
    display: inline-block;
    border-radius: 30px;
    background-color: #fff;
    padding: 3px;
    color: lightgray;
    word-break: normal;
    font-size: 14px;
    text-align: center;
  }
`;
const HorizontalCenterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  margin-right: 5px;
`;
