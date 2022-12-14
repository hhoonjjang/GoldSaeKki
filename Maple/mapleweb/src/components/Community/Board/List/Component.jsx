import { Link } from "react-router-dom";
import styled from "styled-components";
import { WORLDLIST } from "../../../../modules/community";
// import { Link, Routes, Route } from "react-router-dom";

import eyeImg from "../../images/info_eye_new.png";
import heartImg from "../../images/info_heart2_new.png";
import dateImg from "../../images/info_sub_date_new.png";

// import world1Img from "../../images/worlds/icon_1.png";
// import world2Img from "../../images/worlds/icon_2.png";
// import world3Img from "../../images/worlds/icon_3.png";
// import world4Img from "../../images/worlds/icon_4.png";
// import world5Img from "../../images/worlds/icon_5.png";
// import world6Img from "../../images/worlds/icon_6.png";
// import world7Img from "../../images/worlds/icon_7.png";
// import world8Img from "../../images/worlds/icon_8.png";
// import world9Img from "../../images/worlds/icon_9.png";
// import world10Img from "../../images/worlds/icon_10.png";
// import world11Img from "../../images/worlds/icon_11.png";
// import world12Img from "../../images/worlds/icon_12.png";
// import world13Img from "../../images/worlds/icon_13.png";
// import world14Img from "../../images/worlds/icon_14.png";
// import world15Img from "../../images/worlds/icon_15.png";

const tempArr = [
  { text: 1, img: "heart2_new" },
  { text: "날짜디비", img: "sub_date_new" },
  { text: "2222", img: "eye_new" },
];

const ListComponent = () => {
  return (
    <>
      {/* 현재 게시판 이름을 가져와 띄운다. */}
      <CategoryTitle>자유게시판</CategoryTitle>
      <ContentBox>
        {/* 월드 선택 */}
        <WorldBox>
          {WORLDLIST.map((item, idx) => {
            return (
              <WorldSpan key={`world-${idx}`}>
                <WorldImg src={item.img} alt={"월드 이미지"} />{" "}
                <WorldNameSpan>{item.name}</WorldNameSpan>
              </WorldSpan>
            );
          })}
        </WorldBox>

        {/* 게시글 목록 */}
        <ListBox>
          {/* 여기서 map 돌리기 */}
          <OneBoardList>
            <BoardTitle>
              {/* a : Link to로 바꾼뒤 해당 게시물로 보내줘야 함 : 게시글 번호 */}
              <a
                href="/Community/Free/354367?search=c%253d3"
                style={{ color: "rgb(51, 51, 51)" }}
              >
                <span className="server">[오로라]</span>{" "}
                <span className="title">
                  나제목임나제목임나제목임나제목임나제목임나제목임나제목임나제목임나제목임나제목임나제목임나제목임나제목임나제목임
                </span>
                {/* 새로 올라온 게시물인지, 이미지가 있는지 여부에 따라 옆에 이미지 아이콘을 띄운다. : 일단 모두 없앰 */}
                {/* <img className="new" src="https://ssl.nexon.com/s2/game/maplestory/renewal/common/new.png" alt="" /> */}
              </a>
            </BoardTitle>
            <OtherBoardInfo>
              {/* 유저 서버 아이콘도 될수있으면 띄우기 : 이름/아이콘 누르면 해당 캐릭터 정보로 이동함 */}
              {/* 유저 이름은 제목의 오른쪽에 붙이는 게 나을 것 같다. */}
              <UserName>🎂 하이하이</UserName>
              <IconInfoWrap>
                <IconInfo className="heart">11</IconInfo>
                <IconInfo className="date">날짜디비</IconInfo>
                <IconInfo className="eyeCount">0</IconInfo>
              </IconInfoWrap>
            </OtherBoardInfo>
          </OneBoardList>

          <OneBoardList>
            <BoardTitle>
              <a
                href="/Community/Free/354367?search=c%253d3"
                style={{ color: "rgb(51, 51, 51)" }}
              >
                <span className="server">[오로라]</span>{" "}
                <span className="title">
                  나제목임나제목임나제목임나제목임나제목임나제목임나제목임나제목임나제목임나제목임나제목임나제목임나제목임나제목임
                </span>
              </a>
            </BoardTitle>
            <OtherBoardInfo>
              <UserName>🈺 냐냐냔냐</UserName>
              <IconInfoWrap>
                {tempArr.map((item, idx) => {
                  return (
                    <IconInfo key={`icon-${idx}`} iconImg={item.img}>
                      {item.text}
                    </IconInfo>
                  );
                })}
                {/* <IconInfo className='heart'>1</IconInfo>
                                <IconInfo className='date'>날짜디비</IconInfo>
                                <IconInfo className='eyeCount'>2222</IconInfo> */}
              </IconInfoWrap>
            </OtherBoardInfo>
          </OneBoardList>

          <OneBoardList>ㅎ</OneBoardList>
          <OneBoardList>ㅎ</OneBoardList>
          <OneBoardList>ㅎ</OneBoardList>
          <OneBoardList>ㅎ</OneBoardList>
          <OneBoardList>ㅎ</OneBoardList>
          <OneBoardList>ㅎ</OneBoardList>
          <OneBoardList>ㅎ</OneBoardList>
          <OneBoardList>ㅎ</OneBoardList>
        </ListBox>

        {/* 취소, 글작성 버튼 */}
        <ButtonBox>
          <div></div>
          {/* Free 부분을 해당 카테고리 가져와서 넣어준다. */}
          {/* 수정해야할 사항 : href 대신 Link to를 통해 해당 카테고리의 글 작성 라우터로 보낸다.  */}
          <Link to={"/Community/Free/BoardAdd"}>
            <RegistBtn className="btn03_g" onClick={(e) => {
              // 글 작성 버튼 클릭시 해당 요청 보내도록 코드 추가하기
            }}>
              글작성
            </RegistBtn>
          </Link>
        </ButtonBox>
      </ContentBox>
    </>
  );
};

export default ListComponent;

const AllWrap = styled.div`
  & > div {
    float: left;
  }
`;
const CategoryTitle = styled.h1`
  font-size: 28px;
  color: #333;
  margin-top: 60px;
  font-weight: 600;
  width: 100%;
  height: 40px;
  margin-bottom: 40px;
  cursor: default;
`;

const ContentBox = styled.div`
  width: 100%;
  background-color: #ffffff;
  box-sizing: border-box;
  float: left;
  & > div {
    float: left;
  }
`;

const WorldBox = styled.div`
  width: 100%;
  min-height: 130px;
  border: 1px solid #e9eaee;
  background-color: #fbf9fa;
  margin-bottom: 30px;
  padding: 26px 0 0 26px;
`;
const WorldSpan = styled.span`
  float: left;
  width: 90px;
  height: 34px;
  border: 1px solid #ffebf6cc;
  background-color: #ffebf6cc;
  border-radius: 3px;
  margin-right: 6px;
  margin-bottom: 6px;
  line-height: 34px;
  text-align: left;
  color: #666;
  font-size: 13px;
  position: relative;
  cursor: pointer;
  padding-left: 10px;
  &.active,
  &:hover {
    background-color: #ca5196;
    border: 1px solid #ca5196;
    color: #f3f1f1;
  }
`;
const WorldImg = styled.img`
  position: absolute;
  top: 10px;
`;
const WorldNameSpan = styled.span`
  position: absolute;
  left: 27px;
`;

const ListBox = styled.div`
  float: left;
  width: 100%;
  border-top: 1px solid #c8c8d5;
`;
const OneBoardList = styled.div`
  position: relative;
  float: left;
  padding-left: 27px;
  padding-right: 20px;
  height: 68px;
  border-bottom: 1px solid #e3e3e3;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const BoardTitle = styled.div`
  font-size: 16px;
  color: #333;
  float: left;
  & > a .server {
    font-size: 16px;
    margin-right: 5px;
    float: left;
    color: #ca5196;
  }
  & > a .title {
    float: left;
    max-width: 340px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
const OtherBoardInfo = styled.div`
  float: right;
  font-family: "Tahoma";
  color: #aaaaaa;
  font-size: 12px;
  margin-right: 0;
  min-width: 324px;
  max-width: 380px;
`;
const UserName = styled.span`
  float: left;
  width: 110px;
  max-width: 110px;
  color: #888888;
  font-size: 12px;
  font-family: "NanumBarunGothic", "Malgun Gothic", sans-serif;
  line-height: 1.4;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  cursor: default;
`;
const IconInfoWrap = styled.div`
  float: left;
  & > div:first-child {
    min-width: 45px;
  }
  max-width: 310px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const IconInfo = styled.div`
  float: left;
  line-height: 1.2;
  margin-left: 15px;
  min-width: 53px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding-left: 18px;

  /* 보통은 그냥 바로 안띄우고 예외처리도 해준다(ex. 이미지가 안 들어왔을 때 무엇을 띄울 것인지) */
  background: url("https://ssl.nexon.com/s2/game/maplestory/renewal/common/${(props) => props.iconImg}.png") left 0px no-repeat;
  max-width: ${(props) => {
    // 무엇을 기준으로 나눌건지
    switch (props.iconImg) {
      case "heart2_new":
        return 55;
      case "sub_date_new":
        return 100;
      case "eye_new":
        return 70;
      default:
        break;
    }
  }}px;
  &.heart {
    background: url(${heartImg}) left 0px no-repeat;
  }
  &.date {
    background: url(${dateImg}) left 0px no-repeat;
    min-width: 80px !important;
  }
  &.eyeCount {
    background: url(${eyeImg}) left 0px no-repeat;
    min-width: 45px;
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  float: left;
  margin: 16px 0;
  display: flex;
  justify-content: space-between;
`;
const RegistBtn = styled.a`
  min-width: 53px;
  font-size: 15px;
  color: #fff;
  text-align: center;
  background-color: #da63a6;
  border-radius: 2px;
  padding: 12px 24px;
  display: inline-block;
  line-height: 1;
  margin: 0 5px;
  &:hover {
    color: white;
    background-color: #ca5196;
  }
`;
