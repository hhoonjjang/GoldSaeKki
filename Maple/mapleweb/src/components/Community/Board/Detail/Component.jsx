import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { action as communityAction, WORLDLIST } from '../../../../modules/community';
// import { Link, Routes, Route, useNavigate } from "react-router-dom";
import LinkIcon from "../../images/link_btn.png";
import AlarmIcon from "../../images/report_btn2.png";

import eyeImg from "../../images/info_eye_new.png";
import dateImg from "../../images/info_sub_date_new.png";
import lineImg from "../../images/btn_line_img.png";

import moment from 'moment';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const DetailComponent = ({ categorys, category, route }) => {

    const dispatch = useDispatch();

    // 라우터 상단의 번호를 가져와 그 번호를 아래 보드 번호로 맞춰준다.
    const { boardId } = useParams();

    // 디테일 컴포넌트로 보낼 때 게시글 번호를 보내주고, 
    // 게시글 번호를 토대로 해당 목록을 가져오는 요청을 여기에서 보내면 될것 같다.
    // board redux...
    // 리덕스에 저장하는 것이 아닌, 그냥 db에서 뽑아온 값을 출력하고 싶을 떄는 
    // 어떻게 해야하는지 모르겠다.
    // index.jsx에 만들어놨던 것 지우기


    // 해당 게시글을 가져오는 요청을 보낸다.
    // 요청 받는쪽 수정 db쪽
    const boardReq = axios.post("http://localhost:8080/api/board/getBoard", {
        boardId: boardId
    });

    // Promise {<pending>} 형태로 값이 뽑아와 진다.
    // console.log(boardReq);

    // 계속된 리랜더링 문제로 useEffect()로 감싸주었다.
    // 보드 번호가 변경될 때 Redux에 값을 저장해준다.
    // 리덕스에 저장 안 되는 이유가 뭔지 몰겠다.
    useEffect(() => {
        // 배열의 객체로 값이 잘 뽑아와진다. Redux에 해당 리스트를 저장해 준다.
        boardReq.then((board) => {
            dispatch(communityAction.board(board?.data));
        });
    }, [boardId]);


    // Redux에 저장된 상태값인 해당 게시물을 가져와준다.
    const states = useSelector((state) => state);

    let board = "";

    // 처음 랜더링은 Redux에 community가 저장되지 않으며 재 랜더링 했을 때 생긴다.
    // 그래서 처음에 바로 띄우려고 해서 에러가 난 것이고 Redux에 있기 시작할 때 board를 정의해 주었다.
    if (states.community.board) {
        // console.log("하이");
        console.log(states.community.board[0]);
        board = states.community.board[0];
    } else {
        // console.log("Redux에 게시글 없음");
        // console.log(states);
    }

    return (
        <>
            {/* 게시글 목록, 게시글 등록도 이런 식으로 추가하기 */}
            <CategoryTItleBox>
                <CategoryTitle>{category}</CategoryTitle>
                {/* 목록 : 이놈 수정 */}
                {/* Link to로 해당 카테고리 리스트로 이동하도록 한다. */}
                <CategoryRight>
                    <span>목록</span>
                </CategoryRight>
            </CategoryTItleBox>

            {/* 여기서부터 게시글 상세 페이지 내용 시작 */}
            <ContentBox>
                <BoardTitle>
                    <BoardTitleSpan>[{board?.world}]</BoardTitleSpan>{" "}
                    <BoardTitleText>{board?.title}</BoardTitleText>
                </BoardTitle>

                {/* BoardInfo */}
                <BoardInfoBox>
                    <BoardUserName>
                        {WORLDLIST.map((world, idx) => {
                            if (world.name == board?.userWorld) {
                                return <UserName key={`userName-${idx}`}><UserWorldImg key={`userWorldImg-${idx}`} src={`${world.img}`} style={{ marginRight: "1px" }} /> {board?.userName}</UserName>;
                            } else {
                                return;
                            }
                        })}
                    </BoardUserName>
                    <BoardInfo>
                        {/* 나머지정보들 */}
                        <IconInfo>
                            <span style={{ margin: "0px 10px" }}><img src={eyeImg} alt={"조회 아이콘"} />{" "}{board?.eyeCount}{" "}{" "}</span>
                            <span><img src={dateImg} alt={"시간 아이콘"} />{" "}{moment(board?.updatedAt, "YYYY-MM-DDTHH:mm:ssZ").toDate().toLocaleString()}</span>
                        </IconInfo><img src={lineImg} alt={"구분선 이미지"} style={{ margin: "0px 10px" }} />
                        <IconBox>
                            <IconWrap>
                                <BoardOtherIcon src={LinkIcon} alt='링크 아이콘' onClick={() => {
                                    window.prompt("이 글의 트랙백 주소입니다. Ctrl+C를 눌러 클립보드로 복사하세요", window.location.href);
                                }} />
                            </IconWrap>
                            <IconWrap>
                                <BoardOtherIcon src={AlarmIcon} alt='신고 아이콘' onClick={() => {
                                    window.location.href = 'https://ecrm.police.go.kr/minwon/main';
                                }} />
                            </IconWrap>
                        </IconBox>
                    </BoardInfo>
                </BoardInfoBox>

                {/* 내용 영역 : innerHTML으로 넣었다. */}
                <BoardContent dangerouslySetInnerHTML={{ __html: board?.contents }}>
                </BoardContent>

                {/* 공감영역 */}
                <LikeWrap>
                    <LikeBtn><span>❤ 공감하기</span></LikeBtn>
                    <LikeCheck><span>{board?.likeCount} 명</span></LikeCheck>
                </LikeWrap>

                {/* 댓글 영역 */}
                {/* 여기서부터 댓글 컴포넌트 만들어진 이후에 작업 */}
                <CommentInfo>
                    {/* 몇개인지,색깔바꾸기 */}
                    댓글{" "}
                    <CommentCount>0</CommentCount>
                </CommentInfo>
                <CommentBox>
                    <CommentWrap>
                        {/* 댓글 개수에 맞게 map 돌린다. */}
                        <Comment>
                            댓글댓글추가... (닉네임 등등)
                        </Comment>

                    </CommentWrap>
                </CommentBox>

                {/* 댓글 입력 */}
                <CommentAddWrap>
                    <CommentAdd>
                        <CommentTextArea name='comment'></CommentTextArea>
                        <CommentBtnWrap>
                            <div style={{ fontSize: "25px", marginLeft: "5px" }}>🦢</div>
                            <CommentAddBtn>등록</CommentAddBtn>
                        </CommentBtnWrap>

                    </CommentAdd>
                </CommentAddWrap>
            </ContentBox>
        </>
    );
};

export default DetailComponent;

const CategoryTItleBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    display: inline;
    max-width: 400px;
`;
const CategoryRight = styled.div`
    margin-top: 15px;
    cursor: pointer;
    &>span{
        display: inline-block;
        font-size: 13px;
        color: #666;
        padding: 13px 24px;
        line-height: 1;
        border: 1px solid #e6e6e6;
    }
    
`;

const ContentBox = styled.div`
    /* background-color: rgb(245,245,245); */
    min-height: 800px;
`;

const BoardTitle = styled.p`
    /* margin-left: 30px; */
    float: left;
    width: 100%;
    line-height: 1.3;
    min-height: 36px;
    border-top: 1px solid #7e7e7e;
    color: #333;
    font-size: 24px;
    /* background-color: #F9F9F9; */
    background-color: #FBF9FA;
    word-break: break-all;
    /* font-weight: bold; */
    padding: 37px 27px 37px;
    margin-top: 0 !important;
    margin-bottom: 0px;

`;
const BoardTitleSpan = styled.span`
    color: #CA5196;
    font-style: normal;
    font-size: 24px;
`;
const BoardTitleText = styled.span`
    color: #333;
`;


const BoardInfoBox = styled.div`
    float: left;
    width: 100%;
    height: 55px;
    line-height: 55px;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
`;
const BoardUserName = styled.div`
    /* a태그 안의 이미지 아래에 유저 이름을 적는다. */
    float: left;
    margin-left: 27px;
    height: 100%;
    font-size: 13px;
    display: flex;
    align-items: center;
    &>a{
        float: left;
        color: #888;
        &>img{
            margin-bottom: 3px;
            margin-right: 5px;
            vertical-align: middle;
        }
    }
`;
const BoardInfo = styled.div`
    float: right;
    margin-right: 27px;
    font-size: 13px;

    &>div{
        display: inline;
        /* background-color: rgb(245,245,245); */
    }

`;

const BoardContent = styled.div`
    width: 100%;
    float: left;
    padding: 50px 30px;
    /* background-color: #f0808040; */
    min-height: 10px;
    &>p{
        margin-bottom: 0.9rem;
    }
`;

const LikeWrap = styled.div`
    float: left;
    width: 100%;
    height: 55px;
    line-height: 55px;
    text-align: center;
    margin-bottom: 50px;
    &>div{
        display: inline-block;
        height: inherit;
        border-radius: 2px;
        cursor: pointer;
        box-sizing: border-box;
    }
`;
const LikeBtn = styled.div`
    width: 140px;
    background-color: #F6890A;
    color: white;
    margin-right: 5px;
    padding: 0 20px;
    border: 1px solid #F6890A;
    &:hover{
        background-color: #F57700;
        border: 1px solid #F6890A;
    }
`;
const LikeCheck = styled.div`
    min-width: 60px;
    border: 1px solid #dbdbdb;
    background-color: #F7F7F7cc;
    color: #7c767c;
    padding: 0 20px;
    &:hover{
        border: 1px solid #929192da;
    }

`;


const CommentInfo = styled.div`
    float: left;
    width: 100%;
    height: 55px;
    line-height: 55px;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    /* background-color: #F9F9F9; */
    /* background-color: #FBF9FA; */
    padding: 0 30px;
`;
const CommentCount = styled.div`
    color: #F6890A;
    display: inline-block;
    font-size: 17px;
    font-weight: 600;
`;
const IconBox = styled.div`
`;
const IconWrap = styled.div`
    display: inline;
    width: 31px;
    height: 31px;
    margin: 0 5px;
`;
const BoardOtherIcon = styled.img`
    cursor: pointer;
    /* width: 20px;
    height: 20px; */
`;

const CommentBox = styled.div`
    float: left;
    width: 100%;
`;
const CommentWrap = styled.div`
    float: left;
    width: 100%;
    padding: 30px 27px 25px 27px;
    border-bottom: 1px solid #e3e3e3;
`;
const Comment = styled.div`

`;

const CommentAddWrap = styled.div`
    float: left;
    margin-top: 40px;
    width: 100%;
    height: 205px;
`;
const CommentAdd = styled.div`
    height: 203px;
    background-color: #e8eaee;
    border: 1px solid #dcdde1;
`;
const CommentTextArea = styled.textarea`
    float: left;
    padding: 20px;
    width: 908px;
    height: 135px;
    margin-top: 10px;
    margin-left: 10px;
    background-color: #fff;
    resize: none;
    overflow: hidden;
    overflow-y: auto;
    border: none;
`;
const CommentBtnWrap = styled.div`
    position: relative;
    float: left;
    margin-top: 6px;
    width: 100%;
    height: 42px;
    line-height: 42px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &>div{
        display: inline-block;
        cursor: pointer;
    }
`;
const CommentAddBtn = styled.div`
    min-width: 53px;
    font-size: 16px;
    color: #fff !important;
    text-align: center;
    background-color: #747a86;
    border-radius: 2px;
    padding: 9px 24px;
    border: 1px solid #747a86;
    display: inline-block;
    line-height: 1;
    /* float: left; */
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

const UserWorldImg = styled.img`

`;
const IconInfo = styled.div`
    color : #888;
    &>span{
        /* display: flex;
        align-items: center; */
    }
`;