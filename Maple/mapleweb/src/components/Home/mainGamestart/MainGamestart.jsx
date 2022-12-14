import styled from "styled-components";
import gameStartBackground from "../Img/main_gamestart_banner.png";

import gameStart from "../Img/game-start.png";
import download from "../Img/header_game_down.png";
import { Link } from "react-router-dom";
import HomeComponet from "..";

import UserComponent from "../../User";

import badge from "../Img/main_gamestart_badge.png";

const MainGamestart = () => {
  return (
    <MainGamestarteComponent bgImg={gameStartBackground}>
      <div className="mainGamestart">
        <div className="mainGamestart_infomationCenter">
          <div className="mainGamestart_infomationCenter_innerBox">
            <div>
              <Link to="/News" element={<HomeComponet />}>
                <img src={badge} />
              </Link>
            </div>
            <div className="mainGamestart_infomationCenter_innerBox_text">
              <Link to="/News" element={<HomeComponet />}>
                <span>업데이트 정보센터</span>
              </Link>{" "}
              <br />
              <Link to="/News" element={<HomeComponet />}>
                <span>2022.11.24 / ver.1.2.371 업데이트 미리보기</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mainGamestart_gameStart">
          <div className="mainGamestart_gameStart_start">
            <Link to="/" element={<HomeComponet />}>
              <div
                className="header_innerBox_center_start"
                onClick={() => {
                  alert("게임스타트");
                }}
              >
                <img src={gameStart} />
              </div>
            </Link>
          </div>
          <div className="mainGamestart_gameStart_download">
            <Link to="/" element={<HomeComponet />}>
              <div className="header_innerBox_center_download">
                <img src={download} />
              </div>
            </Link>
          </div>
        </div>
        {/* {document.cookie.split("=")[0] != undefined ? ( */}
        <div className="mainGamestart_logged">
          <div className="mainGamestart_logged_innerBox">
            <div className="mainGamestart_logged_innerBox_hero">
              <Link to="/Mypage" element={<HomeComponet />}>
                <img src={""} alt="캐릭터" />
              </Link>
            </div>
            <div className="mainGamestart_logged_innerBox_briefProfile">
              <div className="mainGamestart_logged_innerBox_briefProfile_nameLogout">
                <div className="mainGamestart_logged_innerBox_briefProfile_name">
                  타락파워전사
                </div>
                <div className="mainGamestart_logged_innerBox_briefProfile_Logout">
                  <button className="mainGamestart_logged_innerBox_briefProfile_LogoutButton">
                    로그아웃
                  </button>
                </div>
              </div>
              <div className="mainGamestart_logged_innerBox_briefProfile_mypage">
                <button className="mainGamestart_logged_innerBox_briefProfile_mypage_inner">
                  내 정보 보기
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* ) : (
          <div className="mainGamestart_user">
            <div>
              <Link to={"/login"} element={<UserComponent />}>
                <button className="mainGamestart_user_loginButton">
                  금쪽이ID 로그인{" "}
                </button>
              </Link>
              <Link to={"/regist"} element={<UserComponent />}>
                <button className="mainGamestart_user_registButton">
                  금쪽이ID 회원가입
                </button>
              </Link>
            </div>
          </div>
        )} */}
      </div>
    </MainGamestarteComponent>
  );
};
export default MainGamestart;

const MainGamestarteComponent = styled.div`
  background-image: url(${(props) => props.bgImg});
  height: 180px;
  display: flex;
  justify-content: center;

  .mainGamestart {
    min-width: 1200px;
    position: relative;
  }

  .mainGamestart_infomationCenter {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .mainGamestart_infomationCenter_innerBox {
    min-width: 450px;
    display: flex;
  }

  .mainGamestart_infomationCenter_innerBox_text {
    display: flex;
    flex-direction: column;
    justify-content: center;

    a {
      text-decoration: none;
    }

    a:first-child {
      color: #f68500;
    }

    a:last-child {
      color: #a9a9a9;
    }
  }

  .mainGamestart_gameStart {
    position: relative;
    div:first-child {
      position: absolute;
      left: 240px;
      bottom: -10px;
    }
    div:last-child {
      position: absolute;
      left: 280px;
      bottom: -12px;
    }
  }
  .mainGamestart_user {
    height: 100%;
    position: absolute;
    top: 0px;
    right: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    button {
      color: white;
      border-radius: 3px;
      border: none;
      padding-top: 16px;
      padding-bottom: 16px;
      padding-left: 48px;
      padding-right: 48px;
    }
  }
  .mainGamestart_user_loginButton {
    background-color: rgb(59, 117, 210);
    margin-right: 8px;
  }
  .mainGamestart_user_registButton {
    background-color: rgb(246, 133, 0);
  }
  .mainGamestart_logged {
    height: 100%;
    position: absolute;
    top: 0px;
    right: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;

    .mainGamestart_logged_innerBox {
      display: flex;

      .mainGamestart_logged_innerBox_hero {
        width: 124px;
        height: 96px;
        background-color: #161617;
      }

      .mainGamestart_logged_innerBox_briefProfile {
        display: flex;
        flex-direction: column;

        .mainGamestart_logged_innerBox_briefProfile_name {
          color: white;
        }

        .mainGamestart_logged_innerBox_briefProfile_LogoutButton {
          color: white;
        }

        .mainGamestart_logged_innerBox_briefProfile_LogoutButton {
          background-color: rgb(59, 117, 210);
          border: none;
          border-radius: 3px;
        }

        .mainGamestart_logged_innerBox_briefProfile_mypage_inner {
          background-color: rgb(59, 117, 210);
          border: none;
          border-radius: 3px;
        }
      }
    }
  }
`;
