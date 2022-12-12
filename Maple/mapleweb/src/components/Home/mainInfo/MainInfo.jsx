import styled from "styled-components";
import { Link } from "react-router-dom";

import "../CSS/mainInfo.css";

import mainInfoImg1 from "../Img/main_info_1.png";
import mainInfoImg2 from "../Img/main_info_2.png";
import mainInfoImg3 from "../Img/main_info_3.png";

const MainInfo = () => {
  // 나중에 Link 달아줘야 된다...
  return (
    <div className="mainInfo">
      <div>
        <h1 className="mainInfo_intro">
          메이플스토리 게임정보
          {/* Link달아줘야 함 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="30px"
            className="infoPlusSVG"
          >
            <path d="M200 344V280H136C122.7 280 112 269.3 112 256C112 242.7 122.7 232 136 232H200V168C200 154.7 210.7 144 224 144C237.3 144 248 154.7 248 168V232H312C325.3 232 336 242.7 336 256C336 269.3 325.3 280 312 280H248V344C248 357.3 237.3 368 224 368C210.7 368 200 357.3 200 344zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z" />
          </svg>{" "}
        </h1>
        <div className="mainInfo_innerBox">
          <div className="mainInfo_item mainInfo_item_1">
            <div>
              <img src={mainInfoImg1}></img>
            </div>
            <div className="mainInfo_caption_1">
              <span className="mainInfo_title">파티퀘스트</span>
              <br />
              <span className="mainInfo_text">
                이번 달의 파티퀘스트 일정 정복하기 !
                <br />
                용사님과 함께 파티퀘스트 즐기는 방법
              </span>
            </div>
          </div>
          <div className="mainInfo_item mainInfo_item_2">
            <div>
              <img src={mainInfoImg2}></img>
            </div>
            <div className="mainInfo_caption_2">
              <span className="mainInfo_title">캐릭터&스킬</span>
              <br />
              <span className="mainInfo_text">
                모든 직업과 스킬을 한눈에!
                <br />
                메이플스토리의 캐릭터, 스킬 정보 확인하기
              </span>
            </div>
          </div>
          <div className="mainInfo_item mainInfo_item_3">
            <div>
              {" "}
              <img src={mainInfoImg3}></img>
            </div>
            <div className="mainInfo_caption_3">
              <span className="mainInfo_title">보안강화하기</span>
              <br />
              <span className="mainInfo_text">
                편리와 보안을 한방에! <br />
                안전하고 편하게 메이플스토리 즐기기
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainInfo;

const MainInfoComponent = styled.div``;
