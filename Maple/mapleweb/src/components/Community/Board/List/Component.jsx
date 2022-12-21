import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import moment from "moment";
import Pagination from "react-js-pagination";
import './Paging.css';

import { action, CATEGORY, WORLDLIST } from "../../../../modules/community";
import eyeImg from "../../images/info_eye_new.png";
import heartImg from "../../images/info_heart2_new.png";
import dateImg from "../../images/info_sub_date_new.png";
// import DetailContainer from "../Detail/Container";

const tempArr = [
  { text: 1, img: "heart2_new" },
  { text: "날짜디비", img: "sub_date_new" },
  { text: "2222", img: "eye_new" },
];


const ListComponent = () => {

  // 리덕스를 사용하기 위한 라이브러리
  const dispatch = useDispatch();

  // 현재 주소의 카테고리 라우터를 가져온다.
  const location = useLocation();
  const nowParam = useParams(location).category;

  // 주소에서 카테고리 이름을 가져와 기본값으로 저장한다.
  const [category, setCategory] = useState(CATEGORY.find(item => item.label == nowParam));

  // 페이징 처리 라이브러리
  // https://velog.io/@dltmdwls15/pagination-Library%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EB%AA%A9%EB%A1%9D-%EA%B5%AC%ED%98%84
  // const [page, setPage] = useState(1);
  // const handlePageChange = (page) => { setPage(page); };

  // 현재 유저 닉네임을 가져온다.
  const userName = useSelector((state) => state.user.currUserName);

  // 현재 주소가 바뀌면 카테고리가 바뀌도록 한다.
  useEffect(() => {
    setCategory(CATEGORY.find(item => item.label == nowParam));
  }, [nowParam]);

  // 계속된 리랜더링 문제로 useEffect(()=>{},[카테고리])로 감싸주었다.
  useEffect(() => {
    // 해당 카테고리의 게시글 목록을 가져오는 요청을 보낸다.
    axios.post("http://localhost:8080/api/board/getList", {
      category: category.name,
    }).then((boards) => {
      // DB에 값이 없으면 에러가 뜨지 않게 해준다.
      if (boards.data.name == "SequelizeDatabaseError") {
        return;
      }
      // 해당 게시글 목록을 리덕스에 저장한다.
      // 나중에 페이징 처리 이후 첫번째 페이지를 불러오게 하기
      dispatch(action.list(boards.data));
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      // 무조건 실행한다.
    });
  }, [category, dispatch]);


  // Redux에 저장된 상태값인 해당 게시물들을 가져와준다.
  const boards = useSelector((state) => state.community.list);




  // 페이징 처리 : 현재 페이지
  const [nowPage, setNowPage] = useState(1);
  // 페이지 변경 함수
  const handlePageChange = (page) => {
    setNowPage(page);
  };

  // 띄워야 하는 것 : 해당 페이지의 번호에 맞는 목록을 띄움
  // 1페이지면 0~10개 boards에서 자름
  let newBoards = [];
  if(boards){
    boards.map((item, idx)=>{
      if(idx>=(nowPage-1)*10 && idx<(nowPage)*10){
        newBoards.push(item);
      }
    });
    // console.log(newBoards);
  }
  console.log(newBoards);
  // boards
  // const boardCount = boards.length;
  // console.log(boardCount);

  // console.log(boards);

  // 만약 페이지가 1이면 (나우페이지-1)*0부터 나우페이지*10 개의 개수를 배열에서 잘라 띄워준다.
  // let newBoards = [];
  // boards.map((item, idx)=>{
  //   // if(idx==(nowPage-1)*0){
  //   if(idx==(nowPage-1)*10 && idx==(nowPage)*10){
  //     console.log(idx);
  //   }
  // });

  // 페이징 가공 처리를 다 하고, 어느 배열을 출력할 지만 바꿔주면 될 것 같다.

  return (
    <>
      {/* 현재 게시판 이름을 가져와 띄운다. */}
      <CategoryTitle>{category?.name}</CategoryTitle>
      <ContentBox>
        {/* 월드 선택 */}
        <WorldBox>
          {WORLDLIST.map((item, idx) => {
            return (
              <WorldSpan key={`world-${idx}`}>
                <WorldImg
                  key={`worldImg-${idx}`}
                  src={item.img}
                  alt={"월드 이미지"}
                />{" "}
                <WorldNameSpan key={`worldName-${idx}`}>
                  {item.name}
                </WorldNameSpan>
              </WorldSpan>
            );
          })}
        </WorldBox>

        {/* 게시글 목록 */}
        <ListBox>
          {/* 여기서 map 돌리기 */}
          {newBoards &&
            newBoards?.map((board, idx) => {
              return (
                <Link
                  key={`boardIdLink-${idx}`}
                  to={`/Community/board/${board?.id}`}
                >
                  <OneBoardList key={`oneBoard-${idx}`}>
                    <BoardTitle key={`boardTitle-${idx}`}>
                      <span key={`boardWorld-${idx}`} className="server">
                        [{board?.world}]
                      </span>{" "}
                      <span key={`boardTitleName-${idx}`} className="title">
                        {board?.title}
                      </span>
                      {/* 새로 올라온 게시물인지, 이미지가 있는지 여부에 따라 옆에 이미지 아이콘을 띄운다. : 일단 모두 없앰 */}
                      {/* <img className="new" src="https://ssl.nexon.com/s2/game/maplestory/renewal/common/new.png" alt="" /> */}
                    </BoardTitle>
                    <OtherBoardInfo>
                      {WORLDLIST.map((world, idx) => {
                        if (world.name == board?.userWorld) {
                          return (
                            <UserName key={`userName-${idx}`}>
                              <UserWorldImg
                                key={`userWorldImg-${idx}`}
                                src={`${world.img}`}
                                style={{ marginRight: "1px" }}
                              />{" "}
                              {board?.userName}
                            </UserName>
                          );
                        } else {
                          return;
                        }
                      })}

                      <IconInfoWrap key={`iconInfoWrap-${idx}`}>
                        <IconInfo key={`likeCount-${idx}`} className="heart">
                          {board?.likeCount}
                        </IconInfo>
                        {/* 이놈 예외처리 하기(오늘이면 시간만, 어제면 날짜만 출력, 작년이면 년도~일까지 출력) */}
                        <IconInfo key={`createDate-${idx}`} className="date">
                          {/* 현재 시간 */}
                          {/* {console.log(moment().toDate().toLocaleString())} */}
                          {/* DB에서 가져온 시간 */}
                          {/* {console.log(moment(board.createdAt, "YYYY-MM-DDTHH:mm:ssZ").toDate().toLocaleString())} */}

                          {/* 현재 시간 앞자리 */}
                          {/* {console.log(moment().toDate().toLocaleString().substr(0, 13))} */}
                          {/* DB 시간 앞자리 */}
                          {/* {console.log(moment(board.createdAt, "YYYY-MM-DDTHH:mm:ssZ").toDate().toLocaleString().substr(0, 13))} */}

                          {
                            // 현재 시간 앞자리와 DB 시간 앞자리가 다르면 다른 날이므로 날짜를 띄운다.
                            // 같으면 DB 뒷자리 시간을 출력한다.
                            moment().toDate().toLocaleString().substr(0, 13) !==
                              moment(board?.createdAt, "YYYY-MM-DDTHH:mm:ssZ")
                                .toDate()
                                .toLocaleString()
                                .substr(0, 13)
                              ? // `${moment(board.createdAt, "YYYY-MM-DDTHH:mm:ssZ").toDate().toLocaleString().substr(0, 13)}`
                              `${moment(
                                board?.createdAt,
                                "YYYY-MM-DDTHH:mm:ssZ"
                              )
                                .toDate()
                                .toLocaleString()
                                .substring(0, moment(board?.createdAt, "YYYY-MM-DDTHH:mm:ssZ").toDate().toLocaleString().indexOf("오"))
                              }`
                              // 위 : 오늘이 아닐 때, 아래 : 오늘일 때
                              : `${moment(
                                board?.createdAt,
                                "YYYY-MM-DDTHH:mm:ssZ"
                              )
                                .toDate()
                                .toLocaleString()
                                .substring(moment(board?.createdAt, "YYYY-MM-DDTHH:mm:ssZ").toDate().toLocaleString().indexOf("오"))
                                .substr(0, moment(board?.createdAt, "YYYY-MM-DDTHH:mm:ssZ").toDate().toLocaleString().substring(moment(board?.createdAt, "YYYY-MM-DDTHH:mm:ssZ").toDate().toLocaleString().indexOf("오")).lastIndexOf(":"))
                              }`
                          }
                        </IconInfo>
                        <IconInfo key={`eyeCount-${idx}`} className="eyeCount">
                          {board?.eyeCount}
                        </IconInfo>
                      </IconInfoWrap>
                    </OtherBoardInfo>
                  </OneBoardList>
                </Link>
              );
            })}
          {/* 여기까지 map 돌림 */}
        </ListBox>

        {/* 취소, 글작성 버튼 */}
        <ButtonBox>
          <div></div>

          {/* 로그인 유저 있으면 띄우고 없으면 로그인 페이지로 이동하는 Link to 띄우기 */}

          {userName ? (
            <Link to={`/Community/${category.label}/BoardAdd`}>
              <RegistBtn
                onClick={(e) => {
                  // 글 작성 버튼 클릭시 해당 요청 보내도록 코드 추가하기
                }}
              >
                글작성
              </RegistBtn>
            </Link>
          ) : (
            <RegistBtn
              onClick={(e) => {
                alert("로그인이 필요합니다.");
                return;
              }}
            >
              글작성
            </RegistBtn>
          )}
        </ButtonBox>

        {/* 페이지 */}
        <PagenationWrap>
          <Pagination
            // 현재 페이지
            activePage={nowPage}
            // 띄울 게시글 개수
            itemsCountPerPage={10}
            // 총 게시글 개수(가져옴)
            // totalItemsCount={450}
            // totalItemsCount={boards.length}
            // totalItemsCount={boardCount}
            totalItemsCount={12}
            // 표시할 개수 
            pageRangeDisplayed={10}
            // 이전을 나타낼 아이콘
            prevPageText={"‹"}
            // 다음을 나타낼 아이콘
            nextPageText={"›"}
            // 페이지네이션 함수
            onChange={handlePageChange}
          />
        </PagenationWrap>

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
  padding-left: 8px;
  &.active,
  &:hover {
    transition: all 0.2s;
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
  cursor: pointer;
`;
const BoardTitle = styled.div`
  font-size: 16px;
  color: #333;
  float: left;
  max-width: 500px;
  & > span:first-child {
    color: #ca5196;
  }
  & > a {
    color: rgb(51, 51, 51);
  }
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
  cursor: pointer;
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
  /* 이놈 뭔지 모르겠는데 조금 수정해야 할듯? */
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
    min-width: 90px !important;
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
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #ca5196;
  }
`;

const UserWorldImg = styled.img``;

const PagenationWrap = styled.div`
  float: left;
  width: 100%;
`;
