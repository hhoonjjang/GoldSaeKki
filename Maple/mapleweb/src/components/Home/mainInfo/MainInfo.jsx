import styled from "styled-components";
import { Link } from "react-router-dom";

import "../CSS/mainInfo.css";

import mainInfoImg1 from "../Img/main_info_1.png";
import mainInfoImg2 from "../Img/main_info_2.png";
import mainInfoImg3 from "../Img/main_info_3.png";
// 3. onClick을 부모 컴포넌트(RegistContainer)로부터 props로 받는다.
const MainInfo = () => {
  // 나중에 Link 달아줘야 된다...
  return (
    <div className="mainInfo">
      <div>
        <h1 className="mainInfo_intro">메이플스토리 게임정보</h1>
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
