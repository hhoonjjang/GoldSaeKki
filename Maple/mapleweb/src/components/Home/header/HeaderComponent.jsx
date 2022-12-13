import styled from "styled-components";

import Login from "../../User";

import "../CSS/header.css";
import logo from "../Img/goldsaekki-logo.png";
import gameStart from "../Img/game-start.png";
import download from "../Img/header_game_down.png";
import headerLoginBackground from "../Img/header_login_background.png";
import "../CSS/header.css";
import { Link } from "react-router-dom";

const Header = ({ paint, icon, text }) => {
  return (
    <HeaderComponent paint={paint} icon={icon} text={text}>
      <div className="header_innerBox">
        <div className="header_innerBox_center">
          <div className="header_innerBox_iconAndText">
            <span className="header_innerBox_icon">
              <img src={icon} />
            </span>
            <span className="header_innerBox_text">
              <h2>{text}</h2>
            </span>
          </div>
          <div className="header_innerBox_center_gameStart">
            <img
              src={headerLoginBackground}
              className="header_innerBox_center_login_background"
            />

            <div className="header_innerBox_center_login_innerBox">
              <Link
                to="/login"
                element={<Login />}
                className="header_innerBox_center_login_Link"
              >
                <div>
                  <div className="header_innerBox_center_login_logo">
                    <img src={logo} alt="Logo" />
                  </div>
                  <div className="header_innerBox_center_login_text">
                    <span>금쪽이스토리</span>
                    <span>로그인</span>
                  </div>
                </div>
              </Link>{" "}
            </div>

            <div className="header_innerBox_center_startDownload">
              <div
                className="header_innerBox_center_start"
                onClick={() => {
                  alert("게임 스타트");
                }}
              >
                <img src={gameStart} />
              </div>
              <div className="header_innerBox_center_download">
                <img src={download} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeaderComponent>
  );
};

export default Header;

const HeaderComponent = styled.div`
  position: relative;
  height: 310px;
  background-image: url(${(props) => props.paint});
  background-repeat: no-repeat;
`;
