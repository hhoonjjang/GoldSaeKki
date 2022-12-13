import styled from "styled-components";
import communityBackground from "../Img/main_community_background.jpg";
const MainCommunity = () => {
  return (
    <MainCommunityBox>
      <div></div>
    </MainCommunityBox>
  );
};

export default MainCommunity;

const MainCommunityBox = styled.div`
  background-img: url(${communityBackground});
`;
