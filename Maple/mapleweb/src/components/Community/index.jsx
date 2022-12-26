import styled from "styled-components";
// import { Link, Routes, Route } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useDispatch } from "react-redux";
import { action } from "../../modules/header";

import NavigationComponent from "./Navigation/Component";
import ListContainer from "./Board/List/Container";

import TagBackImg from "./images/issueTag.png";

import one from "./images/1.png";
import two from "./images/2.png";
import three from "./images/3.png";
import four from "./images/4.png";
import prev from "./images/prev.png";
import next from "./images/next.png";
import smile from "./images/smile.png";
import heart from "./images/heart.png";
import tasty from "./images/tasty.png";
import happiness from "./images/happiness.png";
import AddContainer from "./Board/Add/Container";
import { useEffect } from "react";

// 모듈에서 가져온 커뮤니티 카테고리 메뉴바 리스트
// import { action as communityAction, CATEGORY, CATEGORY2 } from "../../modules/community";
import { CATEGORY, CATEGORY2 } from "../../modules/community";
import CommentContainer from "./Pagination/Container";
import DetailContainer from "./Board/Detail/Container";
import EditContainer from "./Board/Edit/Container";
import NotFound from "./NotFound";

const CommunityComponet = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action.header("Community"));
  }, []);

  // 사이드 슬라이드 라이브러리 세팅 : 슬라이드의 기능 조정
  const settings = {
    dots: true, // 점 보이게
    infinite: true, // 무한으로 돌리게
    speed: 1000, // 클릭시 1초에 걸쳐서 넘어가게
    autoplay: true, // 자동으로 넘길 것인지(중요)

    autoplaySpeed: 4000, //4초마다 자동 넘김
    slidesToShow: 1, //1장씩 보이게 해줌
    slidesToScroll: 1, //1장씩 넘어가게 해줌
  };

  // 태그를 가져오는 요청
  // 공감수가 1 이상이면서 태그가 있는 게시글 중에
  // 공감수가 높은 순으로 정렬해 7개까지 뽑아내
  // 맨 첫 번째 태그를 가져와
  // 이슈 태그에 넣어주고
  // 이슈 태그를 누르면 해당 게시글로 이동하도록 하기
  // 일단 요청 보내기
  


  return (
    <CommunityBox className="communityBox">
      {/* 네비게이션 카테고리, 카데고리와 라우터 값을 리듀서에서 불러와 객체로 보내줌. */}
      <NavigationComponent categorys={CATEGORY} />

      <AllWrap className="allWrap">
        <AllBox className="allBox">
          <ContentBox className="contentBox">
            {/* 여기에 나머지 라우터를 띄움(map 돌리지 않기) */}

            <Routes>
              {/* 카테고리에 해당하는 리스트 출력 */}
              <Route path="/:category" element={<ListContainer />}></Route>

              {/* 카테고리에 게시글 추가 컴포넌트 라우터를 만듬 */}
              <Route
                path="/:category/BoardAdd"
                element={<AddContainer />}
              ></Route>

              {/* 게시글 상세 페이지 띄우기 : Link to 로 이동할 때 그 보드 번호가 전달되어야 한다. */}
              <Route
                path="/board/:boardId"
                element={<DetailContainer />}
              ></Route>
              <Route path="/board/hi" element={<NotFound />} />

              {/* 수정 페이지 */}
              <Route
                path="/board/:boardId/edit"
                element={<EditContainer />}
              ></Route>
            </Routes>
          </ContentBox>

          {/* 우측의 뉴스, 슬라이드, 이슈 태그 박스 */}
          <NewsBox className="newsBox">
            <NewsContentWrap className="newsContentWrap">
              <NewsTitle className="newsTitle">
                <NewsH2 className="newsH2">뉴스</NewsH2>
                <NewsMoreSpan className="newsMoreSpan">+</NewsMoreSpan>
              </NewsTitle>
              {/* 시간이 된다면 가장 최근의 뉴스 4개를 띄운다. */}
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

            {/* 뉴스 아래의 이벤트 슬라이드 부분 : 시간이 된다면 이벤트 목록에서 최근것을 가져온다. */}
            <BannerBox>
              <BannerImgBox>
                {/* 슬라이더 라이브러리 사용 */}
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

            {/* 슬라이드 아래의 태그 검색 부분 : 시간이 된다면 태그를 검색할 수 있게 한다.(중요) */}
            <TagSearchBox>
              <TagContentBox>
                {/* 태그 검색 인풋 영역 */}
                <TagInputWrap>
                  <TagInput />
                  <TagSerachBtnSpan>
                    {/* a 태그 :나중에 Link to로 바꾸기(중요) */}
                    {/* <a href="/Community/Free">
                      <SearchImg
                        src="https://cdn.imweb.me/upload/S2020090710444c43a5dc5/255f6640fbc87.png"
                        alt="검색 이미지"
                      />
                    </a> */}
                  </TagSerachBtnSpan>
                </TagInputWrap>
                {/* 태그들이 들어있는 영역 : 태그는 게시물의 하트가 많은 게시물 안에서 맨처음 한개만 가져온다.(시간이 된다면) */}
                <TagListBox>
                  {/* 여기서 이 놈(IssueTag)을 map 돌리면 된다. 태그 개수는 최대 10개까지만 */}
                  <IssueTag>
                    <Link to={"/"}>
                      {/* 텍스트 앞의 #은 map에서 돌려 붙여줘야 한다. */}
                      #던파모바일
                    </Link>
                  </IssueTag>

                  <IssueTag>
                    <Link to={`/Community/Free`}>
                      {/* <a href="/Community/Free" title="검색어"> */}
                      #메이플스토리
                      {/* </a> */}
                    </Link>
                  </IssueTag>
                  <IssueTag>
                    <Link to={`/Community/Free`}>
                      {/* <a href="/Community/Free" title="검색어"> */}
                      #데미지스킨끄기
                      {/* </a> */}
                    </Link>
                  </IssueTag>
                  <IssueTag>
                    <Link to={`/Community/Free`}>
                      {/* <a href="/Community/Free" title="검색어"> */}
                      #정재훈
                      {/* </a> */}
                    </Link>
                  </IssueTag>
                  <IssueTag>
                    <Link to={`/Community/Free`}>
                      {/* <a href="/Community/Free" title="검색어"> */}
                      #월드리프
                      {/* </a> */}
                    </Link>
                  </IssueTag>
                  <IssueTag>
                    <Link to={`/Community/Free`}>
                      {/* <a href="/Community/Free" title="검색어"> */}
                      #반뉴비
                      {/* </a> */}
                    </Link>
                  </IssueTag>
                </TagListBox>
              </TagContentBox>
            </TagSearchBox>


            {/* 하트 아이콘 */}
            <HeartIcon onClick={(e) => {
              e.target.classList.toggle("is-active");
            }}></HeartIcon>
            <HeartIcon style={{ marginLeft: "30px" }} onClick={(e) => {
              e.target.classList.toggle("is-active");
            }}></HeartIcon>
            {/* <SmileImg src={smile} alt="웃음"></SmileImg> */}
            {/* <SmileImg src={tasty} alt="웃음"></SmileImg> */}
            <SmileImg src={happiness} alt="웃음"></SmileImg>

          </NewsBox>
        </AllBox>
      </AllWrap>
    </CommunityBox>
  );
};
export default CommunityComponet;

const CommunityBox = styled.div`
  min-height: 1600px;
`;

const AllWrap = styled.div`
  min-height: 1165px;
  width: 100%;

  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
`;

const AllBox = styled.div`
  background-color: white;
  margin: 0 auto;
  width: 1200px;
  min-height: inherit;

  /* margin-top: 64px; */
  display: flex;
  justify-content: space-between;

  /* 반응형 */
  @media screen and (max-width: 1280px) {
    width: 1000px;
  }
  /* PC , 테블릿 가로 (해상도 768px ~ 1023px)*/ 
  @media all and (min-width:768px) and (max-width:1023px) { 
    width: 780px;
  } 
  /* 테블릿 세로 (해상도 768px ~ 1023px)*/ 
  @media all and (min-width:768px) and (max-width:1023px) { 
    width: 720px;
  } 
  /* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/ 
  @media all and (min-width:480px) and (max-width:767px) {
    width: 500px;
  } 
  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/ 
  @media all and (max-width:479px) {
    width: 300px;
  }
`;

const ContentBox = styled.div`
  min-height: inherit;
  display: inline-block;
  width: 930px;

  /* 반응형 */
  @media screen and (max-width: 1280px) {
    /* margin-right : 55px; */
    margin: 0 55px;
  }
  /* PC , 테블릿 가로 (해상도 768px ~ 1023px)*/ 
  @media all and (min-width:768px) and (max-width:1023px) { 
  } 
  /* 테블릿 세로 (해상도 768px ~ 1023px)*/ 
  @media all and (min-width:768px) and (max-width:1023px) { 
  } 
  /* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/ 
  @media all and (min-width:480px) and (max-width:767px) {
  } 
  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/ 
  @media all and (max-width:479px) {
  }
`;

const NewsBox = styled.div`
  min-height: inherit;
  display: inline-block;
  width: 230px;

  /* 반응형 */
  @media screen and (max-width: 1280px) {
    margin-right: 55px;
  }
  /* PC , 테블릿 가로 (해상도 768px ~ 1023px)*/ 
  @media all and (min-width:768px) and (max-width:1023px) { 
  } 
  /* 테블릿 세로 (해상도 768px ~ 1023px)*/ 
  @media all and (min-width:768px) and (max-width:1023px) { 
    display: none;
  } 
  /* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/ 
  @media all and (min-width:480px) and (max-width:767px) {
    display: none;
  } 
  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/ 
  @media all and (max-width:479px) {
    display: none;
  }
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

  float: left;
  cursor: default;
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
`;
const NewsItemTitle = styled.span`
  color: #ca5196;
`;

const BannerBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 192px;

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
    top: 152px;
    &.slick-active {
    }
    & li button:before {
      color: #ca5196;
    }
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 20px;
    font-weight: 500;
    line-height: 1;
    opacity: 0.8;
    color: #e6c6d5;
    -webkit-font-smoothing: antialiased;
  }
  .slick-prev:before {
    content: "<";
    position: absolute;
    left: 60px;
    top: 91px;
  }
  .slick-next:before {
    content: ">";
    position: absolute;
    right: 60px;
    top: 91px;
  }
`;

const TagSearchBox = styled.div`
  float: left;
  margin-top: 30px;
  /* 스타일드 컴포넌트에서는 이미지를 이렇게 가져오면 된다.  */
  background: url(${TagBackImg}) left top no-repeat;
  background-color: aliceblue;
  height: 229px;
  width: 100%;
`;
const TagContentBox = styled.div`
  width: 190px;
  margin: 0 auto;
  height: 100%;
`;
const TagInputWrap = styled.div`
  width: 100%;
  float: left;
  position: relative;
  margin-top: 48px;
`;
const TagInput = styled.input`
  width: 100%;
  float: left;
  height: 38px;
  border-radius: 3px;
  border: 1px solid #ca5196;
  padding-left: 30px;
  line-height: 38px;
  background: url("https://cdn.imweb.me/upload/S2020090710444c43a5dc5/59a4716f5c1b6.png")
    #ca5196 8px center no-repeat;
  padding-right: 30px;
  font-size: 12px;
  color: #fff;
`;
const TagSerachBtnSpan = styled.span`
  position: absolute;
  right: 12px;
  top: 5px;
  & > a {
    text-decoration: none;
  }
`;
const SearchImg = styled.img`
  /* 배경 이미지는 src로 넣었다. */
`;

const TagListBox = styled.div`
  width: 100%;
  float: left;
  margin-top: 10px;
  height: 120px;
  overflow: hidden;
  list-style: none;
`;
const IssueTag = styled.span`
  float: left;
  padding: 0 9px;
  height: 25px;
  line-height: 25px;
  color: #f9f5f7;
  font-size: 12px;
  border-radius: 3px;
  background-color: #f1b4d1;
  margin-right: 6px;
  margin-bottom: 6px;
  & > a {
    color: white;
    width: 100%;
    height: 100%;
    float: left;
  }
  &:hover {
    background-color: #ca5196;
    color: #edf1f3;
    border: none;
  }
`;


const HeartIcon = styled.div`
    background-color: #ff00003d;
    width: 100px;
    height: 100px;
    background: url("https://cssanimation.rocks/images/posts/steps/heart.png") no-repeat;
    background-position: 0 0;
    cursor: pointer;
    transition: background-position 1s steps(28);
    transition-duration: 0s;
    display: inline-block;
    margin-top: 10px;
    /* margin-top: 300px; */
  
    &.is-active {
        transition-duration: 1s;
        background-position: -2800px 0; 
    }
`;

const SmileImg = styled.img`
  width: 130px;
  height: 50px;
  margin-left: 50px;
  
  /* 드래그 금지 */
  -webkit-touch-callout: none;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
`;