import styled from "styled-components";
import gameStartBackground from "../Img/main_gamestart_banner.png";

import gameStart from "../Img/game-start.png";
import download from "../Img/header_game_down.png";
import { Link } from "react-router-dom";
import HomeComponet from "..";

import UserComponent from "../../User";

import badge from "../Img/main_gamestart_badge.png";
import MypageContainer from "../../User/MyPage/Container";
import { useEffect, useState } from "react";

const MainGamestartComponent = ({ logout }) => {
  return (
    <MainGamestart bgImg={gameStartBackground}>
      <div className="mainGamestart">
        <div className="mainGamestart_infomationCenter">
          <div className="mainGamestart_infomationCenter_innerBox">
            <div>
              <Link to="/News" element={<HomeComponet />}>
                <img src={badge} alt={"뱃지"} />
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
                <img src={gameStart} alt="게임 스타트" />
              </div>
            </Link>
          </div>
          <div className="mainGamestart_gameStart_download">
            <Link to="/" element={<HomeComponet />}>
              <div className="header_innerBox_center_download">
                <img src={download} alt={"다운로드"} />
              </div>
            </Link>
          </div>
        </div>
        {document.cookie.split("=")[0] == "login" ? (
          <div className="mainGamestart_logged">
            <div className="mainGamestart_logged_innerBox">
              <div className="mainGamestart_logged_innerBox_hero">
                <Link to="/Mypage" element={<MypageContainer />}>
                  <img src={""} alt="캐릭터" />
                </Link>
              </div>
              <div className="mainGamestart_logged_innerBox_briefProfile">
                <div className="mainGamestart_logged_innerBox_briefProfile_nameLogout">
                  <Link to="/Mypage" element={<MypageContainer />}>
                    <div
                      className="mainGamestart_logged_innerBox_briefProfile_name"
                      onClick={() => {
                        console.log(document.cookie.split("=")[0]);
                      }}
                    >
                      {/* {currUserName} */}
                    </div>
                  </Link>
                  <div className="mainGamestart_logged_innerBox_briefProfile_Logout">
                    <Link to="/" element={<HomeComponet />}>
                      <button
                        className="mainGamestart_logged_innerBox_briefProfile_LogoutButton"
                        onClick={() => {
                          logout();
                        }}
                      >
                        로그아웃
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="mainGamestart_logged_innerBox_briefProfile_mypage">
                  <Link to="/Mypage" element={<MypageContainer />}>
                    <button className="mainGamestart_logged_innerBox_briefProfile_mypage_inner">
                      내 정보 보기
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
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
        )}
      </div>
    </MainGamestart>
  );
};
export default MainGamestartComponent;

const MainGamestart = styled.div`
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
    right: -0px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    button {
      color: white;
      border-radius: 3px;
      border: none;
      padding-top: 16px;
      padding-bottom: 16px;
      padding-left: 40px;
      padding-right: 40px;
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
        margin-right: 5px;
      }

      .mainGamestart_logged_innerBox_briefProfile {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .mainGamestart_logged_innerBox_briefProfile_nameLogout {
          display: flex;
          margin-bottom: 5px;

          .mainGamestart_logged_innerBox_briefProfile_name {
            margin-top: 9px;
            margin-bottom: 10px;
          }

          .mainGamestart_logged_innerBox_briefProfile_LogoutButton {
            color: white;
            background-color: rgb(59, 117, 210);
            border: none;
            border-radius: 3px;
            color: #cecece;
            font-size: 11px;
            padding-top: 5px;
            padding-bottom: 5px;
          }
        }
        .mainGamestart_logged_innerBox_briefProfile_mypage_inner {
          background-color: rgb(59, 117, 210);
          border: none;
          color: white;
          border-radius: 3px;
          width: 100%;
          height: 50px;
        }
      }
    }
  }
`;
