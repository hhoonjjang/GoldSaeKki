import styled from "styled-components";
import communityBackground from "../Img/main_community_background.jpg";
import CommunityComponet from "../../Community";
import { Link } from "react-router-dom";

const MainCommunity = () => {
  return (
    <MainCommunityBox img={communityBackground}>
      <div className="mainCommunity_innerBox">
        <div className="mainCommunity_innerBox_community">
          <div>
            {" "}
            <h1 className="mainCommunity_innerBox_coordinate_intro">
              금쪽이스토리 커뮤니티
              <Link to="/Community" element={<CommunityComponet />}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width="30px"
                  className="communityPlusSVG"
                >
                  <path d="M200 344V280H136C122.7 280 112 269.3 112 256C112 242.7 122.7 232 136 232H200V168C200 154.7 210.7 144 224 144C237.3 144 248 154.7 248 168V232H312C325.3 232 336 242.7 336 256C336 269.3 325.3 280 312 280H248V344C248 357.3 237.3 368 224 368C210.7 368 200 357.3 200 344zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z" />
                </svg>
              </Link>
            </h1>
          </div>
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="mainCommunity_innerBox_coordinate">
          <div>
            <h1 className="mainCommunity_innerBox_coordinate_intro">
              주간 베스트 코디왕
              <Link to="/Community" element={<CommunityComponet />}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width="30px"
                  className="coordiPlusSVG"
                >
                  <path d="M200 344V280H136C122.7 280 112 269.3 112 256C112 242.7 122.7 232 136 232H200V168C200 154.7 210.7 144 224 144C237.3 144 248 154.7 248 168V232H312C325.3 232 336 242.7 336 256C336 269.3 325.3 280 312 280H248V344C248 357.3 237.3 368 224 368C210.7 368 200 357.3 200 344zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z" />
                </svg>
              </Link>
            </h1>
          </div>
          <div>
            <div>4</div>
            <div>2</div>
            <div>1</div>
            <div>3</div>
            <div>5</div>
          </div>
          <div>
            <div>4등 아바타</div>
            <div>2등 아바타</div>
            <div>1등 아바타</div>
            <div>3등 아바타</div>
            <div>5등 아바타</div>
          </div>
          <div>
            <div>4등닉네임</div>
            <div>2등닉네임</div>
            <div>1등닉네임</div>
            <div>3등닉네임</div>
            <div>5등닉네임</div>
          </div>
        </div>
      </div>
    </MainCommunityBox>
  );
};

export default MainCommunity;

const MainCommunityBox = styled.div`
  background-image: url(${(props) => props.img});
  height: 1056px;
  color: white;
  display: flex;
  justify-content: center;

  .mainCommunity_innerBox {
    min-width: 1200px;
  }

  .coordiPlusSVG {
    position: absolute;
    right: 0px;
    fill: lightgray;
  }

  .mainCommunity_innerBox_coordinate_intro {
    font-weight: lighter;
    font-size: 40px;
    text-align: center;
    position: relative;
  }

  .coordiPlusSVG {
    position: absolute;
    right: 0px;
    fill: lightgray;
  }
`;