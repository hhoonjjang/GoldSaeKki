import styled from "styled-components";
import UncontrolledExample from "./Request/Component";
const OnlineComponent = () => {
  return (
    <OnlineBox>
      <div>
        <div>문의유형 선택</div>
        <div>
          문의유형을 선택하면 문의유형에 따라 [자주 찾는 도움말]을 확인할 수
          있습니다.
        </div>
        <div>
          찾는 도움말이 보이지 않으면 [도움말 검색]을 이용해 원하는 도움말을
          찾아 주세요.
        </div>
      </div>
      <UncontrolledExample />
    </OnlineBox>
  );
};

export default OnlineComponent;

const OnlineBox = styled.div``;
