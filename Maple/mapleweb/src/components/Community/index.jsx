import styled from "styled-components";
// import { Link, Routes, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NavigationComponent from "./Navigation/Component";
import ListContainer from "./Board/List/Container";

import FreeImg from './images/자유.png';
import InformationImg from './images/정보.png';
import TopicDiscussionImg from './images/토론.png';
import ArtImg from './images/아트.png';
import CoordinationImg from './images/코디.png';

import one from './images/1.png';
import two from './images/2.png';
import three from './images/3.png';
import four from './images/4.png';
import prev from './images/prev.png';
import next from './images/next.png';
import tag from './images/issueTag.png';
import AddContainer from "./Board/Add/Container";

// 모듈에서 가져온 커뮤니티 카테고리 메뉴바 리스트
import { CATEGORY, CATEGORY2 } from "../../modules/community";
import CommentContainer from "./Pagination/Container";

const CommunityComponet = () => {

  // 슬라이드 세팅 : 슬라이드의 기능 조정
  const settings = {
    dots: true,  // 점 보이게
    infinite: true, // 무한으로 돌리게
    speed: 1000, // 클릭시 1초에 걸쳐서 넘어가게
    autoplay: true, // 자동으로 넘길 것인지(중요)

    autoplaySpeed: 4000, //4초마다 자동 넘김
    slidesToShow: 1, //1장씩 보이게 해줌
    slidesToScroll: 1, //1장씩 넘어가게 해줌
    // centerMode: true,
    // centerPadding: "20px"
  };

  return (
    <CommunityBox className="communityBox">
      {/* 카테고리 네비게이션, 사용시 카데고리와 라우터 값을 보내준다. */}
      <NavigationComponent categorys={CATEGORY2} />

      <AllWrap className="allWrap">
        <AllBox className="allBox">
          <ContentBox className="contentBox">
            {/* 여기에 나머지 라우터를 띄움 : 여기는 일단 map 돌리지 말라고 함 */}

            <Routes>
              {/* <Route path="/Free" element={
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
              }></Route> */}

              {/* 컨테이너를 넣고 그 안에서 컴포넌트를 출력한다. */}
              {/* 카테고리 : 일단 안 쓰이는데 나중에 현재 카테고리 출력할때 사용할듯 */}
              <Route path="/BoardList" element={<ListContainer categorys={CATEGORY} />}></Route>
              <Route path="/BoardAdd" element={<AddContainer categorys={CATEGORY} />}></Route>
              <Route path="/BoardUpdate" element={"게시글수정"}></Route> {/* 수정은 필요없을듯 */}
              <Route path="/Board" element={"게시글상세"}></Route>

              <Route path="/CommentList" element={"댓글목록"}></Route>
              <Route path="/CommentAdd" element={"댓글 등록"}></Route>
              <Route path="/CommentUpdate" element={"댓글 수정"}></Route>

              <Route path="/Pagination" element={<CommentContainer />}></Route>


            </Routes>
          </ContentBox>

          <NewsBox className="newsBox">
            <NewsContentWrap className="newsContentWrap">
              <NewsTitle className="newsTitle">
                <NewsH2 className="newsH2">뉴스</NewsH2>
                <NewsMoreSpan className="newsMoreSpan">+</NewsMoreSpan>
              </NewsTitle>
              {/* 가장 최근의 뉴스 4개를 띄운다. */}
              <NewsContent className="newsContent">
                {/* 이 안의 아이템 Map으로 최근 공지사항 4개 가져와 띄우기 */}
                <NewsItem className="newsItem">
                  {/* 내용 Link로 감싸기 */}
                  <NewsItemTitle className="newsItemTitle">
                    공지
                  </NewsItemTitle>{" "}
                  버그악용/불법프로그램 신고 보상 지급 안내
                </NewsItem>
                <NewsItem className="newsItem">
                  {/* 내용 Link로 감싸기 */}
                  <NewsItemTitle className="newsItemTitle">
                    공지
                  </NewsItemTitle>{" "}
                  12/9(금) 운영정책위반 단속결과
                </NewsItem>
                <NewsItem className="newsItem">
                  {/* 내용 Link로 감싸기 */}
                  <NewsItemTitle className="newsItemTitle">
                    공지
                  </NewsItemTitle>{" "}
                  넥슨플레이 "게임 접속 이벤트" 진행 안내
                </NewsItem>
                <NewsItem className="newsItem">
                  {/* 내용 Link로 감싸기 */}
                  <NewsItemTitle className="newsItemTitle">
                    공지
                  </NewsItemTitle>{" "}
                  12월 지속 가능한 보안캠페인 진행 안내
                </NewsItem>
              </NewsContent>
            </NewsContentWrap>

            <BannerBox>
              <BannerImgBox>
                {/* 슬라이더 사용 */}
                <StyledSlide {...settings}>
                  <div>
                    <BannerImg
                      src={one}
                      alt="현생 용사를 위한 겨울 버전 메꾸 패키지"
                    />
                    <BannerText>
                      현생 용사를 위한 겨울 버전 메꾸 패키지
                    </BannerText>
                  </div>
                  <div>
                    <BannerImg src={two} alt="썬데이 메이플" />
                    <BannerText>썬데이 메이플</BannerText>
                  </div>
                  <div>
                    <BannerImg src={three} alt="돌의 정령을 키워달람!" />
                    <BannerText>돌의 정령을 키워달람!</BannerText>
                  </div>
                  <div>
                    <BannerImg src={four} alt="페어리 브로의 황금마차" />
                    <BannerText>페어리 브로의 황금마차</BannerText>
                  </div>
                </StyledSlide>
              </BannerImgBox>
            </BannerBox>

            <TagSearchBox>
              <TagImg src={tag}></TagImg>
            </TagSearchBox>
          </NewsBox>
        </AllBox>
      </AllWrap>
    </CommunityBox>
  );
};

export default CommunityComponet;

const CommunityBox = styled.div`

  min-height : 1600px;
  /* 머지 : 배경컬러 없애는게 맞음 */
  /* background-color: #e6e6e6; */

`;

const AllWrap = styled.div`
  min-height: 1165px;
  /* padding: 20px 0; */
  width: 100%;

  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
`;

const AllBox = styled.div`
  background-color: white;
  margin: 0 auto;
  width: 1200px;
  min-height: inherit;

  margin-top: 64px;
  display: flex;
  justify-content: space-between;
`;

const ContentBox = styled.div`
  min-height: inherit;
  display: inline-block;
  width: 930px;
`;

const NewsBox = styled.div`
  min-height: inherit;
  display: inline-block;
  /* background-color: #00000022; */
  width: 230px;
`;

const NewsContentWrap = styled.div`
  width: 100%;
  float: left;
  margin-top: 60px;
  border-top: 2px solid #343536;
  background-color: white;

  padding: 0 5px;
  box-sizing: border-box;
`;
const NewsTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 62px;
`;
const NewsH2 = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: #333;
  margin-top: 17px;
  /* margin-left: 5px; */
  /* width: 225px; */
  float: left;
`;
const NewsMoreSpan = styled.div`
  float: right;
  margin-right: 5px;
  cursor: pointer;
  padding: 20px 0;
  font-size: 28px;
  color: gray;
  font-weight: 300;
`;

const NewsContent = styled.div`
  padding-bottom: 20px;
`;
const NewsItem = styled.div`
  /* 이 안의 항목들은 나중에 Link a 태그로 감싸 해당 라우터 주소로 보내준다. */

  color: #333;
  font-size: 13px;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  /* 넘침 처리 */
  /* overflow: hidden;
  height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis; */

`;
const NewsItemTitle = styled.span`
  color: #3e67ae;
`;

const BannerBox = styled.div`
  /* background: coral; */
  box-sizing: border-box;
  width: 100%;
  height: 192px;

  /* overflow: hidden; */
  float: left;
  border: 1px solid #e3e3e3;
  background-color: white;
`;
const BannerImgBox = styled.div`
  display: flex;
`;
const BannerImg = styled.img`
  z-index: -1;
  width: 100%;
  height: 120px;
  background-position: 50% 50%;
  background-size: contain;
  background-repeat: no-repeat;
  flex: none;
  object-fit: contain;
  cursor: pointer;
`;
const BannerText = styled.div`
  margin-top: 10px;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
`;
const StyledSlide = styled(Slider)`
  width: 230px;
  min-height: 120px;

  /* 슬라이드 크기 조절 */
  .slick-list {
    width: 230px;
    min-height: 120px;

    /* 슬라이드 크기 조절 */
    .slick-list{ 
    	width: 230px;
      height: 145px;
      margin: 0 auto;

      position: relative;
      display: block;
      box-sizing: border-box;
      -webkit-user-select: none;
        -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;
      -webkit-touch-callout: none;
      -khtml-user-select: none;
      -ms-touch-action: pan-y;
          touch-action: pan-y;
      -webkit-tap-highlight-color: transparent;

    }

    position: relative;
    display: block;
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-dots {
    width: 120px;
    margin-left: 54px;
    position: absolute;
    top: 151px;
  }

  .slick-prev:before,
  .slick-next:before {
    //얘는 양옆 버튼. 커스텀 해줘야 보임
    /* font-family: 'slick'; */
    font-size: 20px;
    font-weight: 500;
    line-height: 1;
    opacity: 0.8;
    color: #646464;
    -webkit-font-smoothing: antialiased;
  }
  .slick-prev:before {
    content: "<";
    position: absolute;
    left: 60px;
    top: 91px;
    /* &:hover{
        color: #141414;
      } */
  }
  .slick-next:before {
    content: ">";
    position: absolute;
    right: 60px;
    top: 91px;
    /* &:hover{
        color: #141414;
      } */
  }
`;

const TagSearchBox = styled.div`
  float: left;
  margin-top: 30px;
`;
const TagImg = styled.img`
  height: 229px;
`;
