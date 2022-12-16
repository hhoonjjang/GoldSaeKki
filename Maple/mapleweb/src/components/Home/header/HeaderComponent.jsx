import styled from "styled-components";

import Login from "../../User";

import logo from "../Img/goldsaekki-logo.png";
import gameStart from "../Img/game-start.png";
import download from "../Img/header_game_down.png";
import headerLoginBackground from "../Img/header_login_background.png";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import MypageContainer from "../../User/MyPage/Container";

const Header = ({ paint, icon, text, currUserName, logout }) => {
  const [_, setRender] = useState(false);
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
            {document.cookie.split("=")[0] == "login" ? (
              <div className="header_innerBox_center_loggedin_innerBox">
                <Link
                  to="/Mypage"
                  element={<MypageContainer />}
                  className="header_innerBox_center_loggedin_Link"
                >
                  <div>
                    <div className="header_innerBox_center_loggedin_logo">
                      <img src={logo} alt="Logo" />
                    </div>
                    <div className="header_innerBox_center_loggedin_text">
                      <span>{currUserName}</span>
                      <span
                        onClick={() => {
                          logout();
                        }}
                      >
                        로그아웃
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ) : (
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
                </Link>
              </div>
            )}
            ;
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
  background-image: url(${(props) =>
    props.paint || "../Img/header_banner/header_banner_community.png"});
  background-repeat: no-repeat;

  .header_innerBox {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    /* flex를 잡았는데 안보이는 문제가 있으면 세로 높이를 잡아주자. */
  }
  .header_innerBox_center {
    position: relative;
    display: flex;
    justify-content: space-between;
    min-width: 1200px;
  }
  .header_innerBox_iconAndText {
    position: absolute;
    display: flex;
    color: white;
    bottom: 50px;
  }

  .header_innerBox_icon {
    margin-right: 20px;
  }

  .header_innerBox_text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 600px;
  }

  .header_innerBox_center_gameStart {
    position: absolute;
    bottom: 0px;
    right: 0px;
    display: flex;
  }

  .header_innerBox_center_login_background {
    position: absolute;
    right: -70px;
    bottom: 0;
    z-index: 0;
  }

  .header_innerBox_center_login_Link {
    height: 90px;
    width: 135px;
    position: absolute;
    bottom: 0px;
    left: -127px;
    cursor: pointer;
  }

  .header_innerBox_center_login_innerBox {
    position: relative;
    justify-content: end;
    bottom: 0px;
    right: 50px;
    display: flex;
    width: 200px;
    height: 100%;
    z-index: 99999;
  }
  .header_innerBox_center_login_innerBox > a {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .header_innerBox_center_login_innerBox > a > div {
    display: flex;
  }

  .header_innerBox_center_login_logo {
    /* position: absolute; */
    /* bottom: 20px; */
    /* left: -140px; */
    z-index: 4;
  }

  .header_innerBox_center_login_logo img {
    width: 50px;
    border: 1px solid white;
    border-radius: 50%;
  }
  .header_innerBox_center_login_text {
    /* position: absolute; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 4;
    /* bottom: 20px;
    left: -80px; */
  }

  .header_innerBox_center_login_text > span {
  }

  .header_innerBox_center_login_text > span:first-child {
    font-size: 14px;
    color: white;
  }

  .header_innerBox_center_login_text > span:last-child {
    font-size: 20px;
    color: orange;
  }

  .header_innerBox_center_loggedin_background {
    position: absolute;
    right: -70px;
    bottom: 0;
    z-index: 0;
  }

  .header_innerBox_center_loggedin_Link {
    height: 90px;
    width: 135px;
    position: absolute;
    bottom: 0px;
    left: -127px;
    cursor: pointer;
  }

  .header_innerBox_center_loggedin_innerBox {
    position: relative;
    justify-content: end;
    bottom: 0px;
    right: 50px;
    display: flex;
    width: 200px;
    height: 100%;
    z-index: 99999;
  }
  .header_innerBox_center_loggedin_innerBox > a {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .header_innerBox_center_loggedin_innerBox > a > div {
    display: flex;
  }

  .header_innerBox_center_loggedin_logo {
    /* position: absolute; */
    /* bottom: 20px; */
    /* left: -140px; */
    z-index: 4;
  }

  .header_innerBox_center_loggedin_logo img {
    width: 50px;
    border: 1px solid white;
    border-radius: 50%;
  }
  .header_innerBox_center_loggedin_text {
    /* position: absolute; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 4;
    /* bottom: 20px;
    left: -80px; */
  }

  .header_innerBox_center_loggedin_text > span {
  }

  .header_innerBox_center_loggedin_text > span:first-child {
    font-size: 14px;
    color: white;
  }

  .header_innerBox_center_loggedin_text > span:last-child {
    font-size: 20px;
    color: orange;
  }

  .header_innerBox_center_startDownload {
    position: relative;
  }
  .header_innerBox_center_start {
    position: absolute;
    bottom: -27px;
    right: 0;
    z-index: 99999;
  }
  .header_innerBox_center_download {
    display: flex;
    justify-content: center;
    position: absolute;
    right: 45px;
    z-index: 99999;
    cursor: pointer;
  }
`;
