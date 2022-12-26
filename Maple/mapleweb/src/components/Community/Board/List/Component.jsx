import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import moment from "moment";
import Pagination from "react-js-pagination";
// import './Paging.css';

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

  // 현재 주소의 카테고리 라우터를 가져옴
  const location = useLocation();
  const nowParam = useParams(location).category;

  // 주소의 값으로 카테고리 이름을 찾아 기본값으로 저장
  const [category, setCategory] = useState(CATEGORY.find(item => item.label == nowParam));
  const [_, render] = useState(false);

  // 페이징 처리 : 현재 페이지
  const [nowPage, setNowPage] = useState(1);
  // 페이지 변경 함수
  const handlePageChange = (page) => {
    setNowPage(page);
  };

  // 현재 유저 닉네임
  const userName = useSelector((state) => state.user.currUserName);

  // 전체 월드 버튼 엘리먼트
  const allWorldRef = useRef();
  const noRef = useRef();
  // 현재 선택된 월드
  const [nowWorld, setNowWorld] = useState("전체월드");

  // 현재 주소가 바뀌면 카테고리 이름 바꿈
  useEffect(() => {
    setCategory(CATEGORY.find(item => item.label == nowParam));

    // 스크롤도 올려줌
    window.scrollTo({ left: 0, top: 300, behavior: "smooth" });

    // 월드 초기화
    const active2 = document.querySelectorAll(".active2");
    for (let i = 0; i < active2.length; i++) {
      active2[i].classList.remove("active2");
    }
    allWorldRef.current.classList.add("active2");
  }, [nowParam]);


  // Redux에 저장된 상태값인 해당 게시물들을 가져와준다.
  let boards = useSelector((state) => state.community.list);
  // 월드 필터에 해당하는 보드들
  let worldBoards = [];

  // 현재 월드가 바뀔 때 // 여기부터
  useEffect(() => {
    // console.log(nowWorld);
    // console.log(boards);
    // boards에서 world이름이 nowWorld이름과 같은 것만 다시 boards에 저장 -> 리덕스에도 재저장

    if (nowWorld == "전체월드") {
      console.log("전체월드임");

      // 리덕스에 전체 카테고리들을 저장해준다.
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
      });

      return;
    } else {
      console.log("전체월드아님" + nowWorld + "임");

      // 리덕스에 해당 카테고리들만 저장해준다. (item)
      // 해당 카테고리의 게시글 목록을 가져오는 요청을 보낸다.
      axios.post("http://localhost:8080/api/board/getWorldList", {
        category: category.name,
        // 여기부터
        world: nowWorld,
      }).then((boards) => {
        console.log(boards);
        // DB에 값이 없으면 에러가 뜨지 않게 해준다.
        if (boards.data.name == "SequelizeDatabaseError") {
          return;
        }
        // 해당 게시글 목록을 리덕스에 저장한다.
        // 나중에 페이징 처리 이후 첫번째 페이지를 불러오게 하기
        dispatch(action.list(boards.data));
      });
    }
  }, [nowWorld]);

  // 페이지에 맞는 게시글들을 띄우기 위해 개수만큼 잘라줌
  let newBoards = [];
  if (boards) {
    boards.map((item, idx) => {
      if (idx >= (nowPage - 1) * 10 && idx < (nowPage) * 10) {
        newBoards.push(item);
      }
    });
  }

  // 보드 배열이 바뀔 때마다 댓글 개수를 가져온다.
  let commentCounts = [];

  // 계속된 리랜더링 문제로 useEffect(()=>{},[카테고리])로 감싸주었다.
  useEffect(() => {
    setNowPage(1);

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


  // 게시글 가져오는 부분에서 관계형으로 값을 가져온다.
  // 보드 배열이 바뀔 때마다 댓글 개수를 가져온다.
  // 일단 이 놈은 안 쓰이는 놈들이다.
  // let commentCounts = [];
  useEffect(() => {
    console.log("안녕");
    newBoards.map(async (item, idx) => {

      // 해당 게시글의 댓글 개수를 가져오는 요청을 보낸다.
      await axios.post("http://localhost:8080/api/comment/count", {
        boardId: item.id,
      }).then((item) => {
        commentCounts.push(item.data.number);
        dispatch(action.commentCounts(commentCounts));
      });

    });
  }, [category, dispatch]);
  // }, []);


  // 페이지 높이 변경
  useEffect(() => {
    window.scrollTo({ left: 0, top: 300, behavior: "smooth" });
  }, [nowPage]);



  return (
    <AllWrap>
      {/* 현재 게시판 이름을 가져와 띄운다. */}
      {/* <CategoryTitle>{category?.name}</CategoryTitle> */}
      <CategoryTitle>{category?.name}</CategoryTitle>
      <ContentBox>
        {/* 월드 선택 */}
        <WorldBox>
          {WORLDLIST.map((item, idx) => {
            return (
              // 현재 선택된 월드 allWorldRef
              <WorldSpan key={`world-${idx}`} className={`${idx == 0 ? "active2" : ""}`} ref={idx === 0 ? allWorldRef : noRef} onClick={(e) => {
                // console.log("하이");
                // 해당 클래스를 가진 놈들
                const active2 = document.querySelectorAll(".active2");
                // 다 삭제해버림
                for (let i = 0; i < active2.length; i++) {
                  active2[i].classList.remove("active2");
                }
                // 내가 클릭한 놈한테 active 클래스 추가
                e.target.classList.add("active2");
                // 현재 액티브 클래스를 가진 놈 확인
                // console.log(document.querySelectorAll(".active2"));

                // 현재 월드 재설정
                setNowWorld(item.name);
              }}>
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
                      </span>{" "}
                      {/* <CommentCount>({board.commentCount})</CommentCount> */}
                      {board.commentCount == 0 ? "" : <CommentCount>({board.commentCount})</CommentCount>}
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
            <>
              <Link to={`/login`}>
                <RegistBtn
                  onClick={(e) => {
                    alert("로그인이 필요합니다.");
                    return;
                  }}
                >
                  글작성
                </RegistBtn>
              </Link>
            </>
          )}
        </ButtonBox>

        {/* 페이지 */}
        <PagenationWrap>
          <Pagination
            // 현재 페이지
            activePage={nowPage}
            // 띄울 게시글 개수
            itemsCountPerPage={10}
            // 총 게시글 개수
            totalItemsCount={boards?.length || 0}
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
    </AllWrap>
  );
};

export default ListComponent;

const AllWrap = styled.div`
  /* & > div {
    float: left;
  } */
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
  ul {
      list-style: none;
      padding: 0;
      cursor: pointer;
  }
  ul.pagination li {
      display: inline-block;
      width: 35px;
      height: 35px;
      border: 1px solid #e2e2e2;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
  }
  ul.pagination li:first-child {
      /* border-radius: 5px 0 0 5px; */
      border-radius: 3px 0 0 3px;
  }
  ul.pagination li:last-child {
      /* border-radius: 0 5px 5px 0; */
      border-radius: 0 3px 3px 0;
  }
  ul.pagination li a {
      text-decoration: none;
      /* color: #337ab7; */
      color: #DC7EB3;
      font-size: 1rem;
  }

  ul.pagination li.active a {
      color: white;
  }

  ul.pagination li.active {
      /* background-color: #337ab7; */
      background-color: #DC7EB3;
  }
  ul.pagination li a:hover,
  ul.pagination li a.active {
      /* color: blue; */
      color: #CA5196;
  }
  .page-selection {
      width: 48px;
      height: 30px;
      /* color: #337ab7; */
      color: #DC7EB3;
  }
`;
const CategoryTitle = styled.h1`
  /* font-size: 28px;
  color: #333;
  margin-top: 60px;
  font-weight: 600;
  width: 100%;
  height: 40px;
  margin-bottom: 40px;
  cursor: default; */
  font-size: 28px;
  color: #333;
  margin-top: 20px;
  font-weight: 600;
  width: 100%;
  height: 100px;
  line-height: 100px;
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
  padding: 26px 0 20px 26px;
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
  /* 드래그 금지 */
  -webkit-touch-callout: none;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  
  /* 이놈 : 자식 전부를 뜻함 */
  *{
    pointer-events: none;
  }
  
  &.active2,
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
  height: 0;
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
const RegistBtn = styled.span`
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

const CommentCount = styled.span`
  font-size: 15px;
  color: #e69fc7;
`;