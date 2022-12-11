import styled from "styled-components";
import headerImg from "./images/캡처.PNG";
import homeImg from "./images/캡처2.PNG";

const HomeComponet = () => {
  return (
    <TempBox>
      <TempHeaderBox>
        <img src={headerImg} alt={"임시 헤더"} />
      </TempHeaderBox>
      <TempHomeBox>
        <img src={homeImg} alt={"임시 홈"} />
      </TempHomeBox>
    </TempBox>
  );
};

export default HomeComponet;

const TempBox = styled.div`
  width: 100px;
  border-bottom: 1px solid #ebebeb;
  background-color: #f8f8f8;
  box-sizing: border-box;
`;
const TempHeaderBox = styled.div`
  border-bottom: 1px solid #ebebeb;
  height: 62px;
  background-size: contain;
  position: fixed;
  z-index: 1;
`;
const TempHomeBox = styled.div`
  height: 310px;
  padding-top: 62px;
`;


