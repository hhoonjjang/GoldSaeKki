import styled from "styled-components";
import backimg from "../Img/backimg.png";
import profileimg from "../Img/profile.jpg";
import NavigateComp from "../../Community/Navigation/Component";

const MypageComponent = () => {
  const CATEGORY = [
    {
      name: "내정보 관리",
      label: "",
      link: "/mypage",
    },
  ];

  return (
    <MypageBox>
      <MypageMain>
        <NavigateComp categorys={CATEGORY} />
        <h2>마이 메이플</h2>
        <MypageContents>
          <img src={profileimg} alt="프로필사진" />
        </MypageContents>
      </MypageMain>
    </MypageBox>
  );
};
export default MypageComponent;

const MypageBox = styled.div`
  width: 1200px;
  height: 1000px;
  margin: 0 auto;
  background-image: url(${backimg});
  background-repeat: no-repeat;
  background-size: contain;
`;

const MypageMain = styled.div`
  width: 100%;
  & > h2 {
    text-align: center;
    font-weight: bold;
    padding-top: 20px;
  }
`;

const MypageContents = styled.div`
  & > img {
    width: 200px;
    margin: 20px;
  }
`;
