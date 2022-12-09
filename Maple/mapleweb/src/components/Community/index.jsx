import styled from "styled-components";

import NavigationComponent from "./Navigation/Component";

const CommunityComponet = () => {

  // 리듀서에 넣어서 리듀서에서 가져오기..?
  const CATEGORY = [
    ["Free", '자유게시판'],
    ["Information", '정보게시판'],
    ["TopicDiscussion", '토론게시판'],
    ["Art", '메이플아트'],
    ["Coordination", '메이플코디']
  ];

  return (
    <CommunityBox>

      {/* 네비게이션 사용시 카데고리와 라우터 값을 배열안의 객체로 보내준다. */}
      <NavigationComponent category={CATEGORY} />

    </CommunityBox>
  );
};

export default CommunityComponet;

const CommunityBox = styled.div`
  min-height : 1600px;
  background-color: #e6e6e6;
`;
