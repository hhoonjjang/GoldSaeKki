import styled from "styled-components";
// import { Link, Routes, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import NavigationComponent from "./Navigation/Component";
import FreeImg from './images/자유.png';
import InformationImg from './images/정보.png';
import TopicDiscussionImg from './images/토론.png';
import ArtImg from './images/아트.png';
import CoordinationImg from './images/코디.png';

const CATEGORY = [
  { name: '자유 게시판', label: "Free", link: "/Free" },
  { name: '정보게시판', label: "Information", link: "/Information" },
  { name: '토론게시판', label: "TopicDiscussion", link: "/TopicDiscussion" },
  { name: '메이플아트', label: "Art", link: "/Art" },
  // { name: '메이플코디', label: "Coordination", link: "/Coordination" }
  { name: '코디', label: "Coordination", link: "/Coordination" }
];

const CommunityComponet = () => {

  // 리듀서에 넣어서 리듀서에서 가져오기..?

  return (
    <CommunityBox>

      {/* 네비게이션 사용시 카데고리와 라우터 값을 배열안의 객체로 보내준다. */}
      <NavigationComponent categorys={CATEGORY} />

      {/* 여기에 나머지 라우터를 띄움 */}
      <Routes>
        <Route path="/Free" element={
            <img src={FreeImg} alt="임시 자유게시판" />
        }></Route>
        <Route path="/Information" element={
            <img src={InformationImg} alt="임시 정보게시판" />
        }></Route>
        <Route path="/TopicDiscussion" element={
            <img src={TopicDiscussionImg} alt="임시 토론게시판" />
        }></Route>
        <Route path="/Art" element={
            <img src={ArtImg} alt="임시 토론게시판" />
        }></Route>
        <Route path="/Coordination" element={
            <img src={CoordinationImg} alt="임시 토론게시판" />
        }></Route>
      </Routes>

    </CommunityBox>
  );
};

export default CommunityComponet;

const CommunityBox = styled.div`
  min-height : 1600px;
  background-color: #e6e6e6;
`;

