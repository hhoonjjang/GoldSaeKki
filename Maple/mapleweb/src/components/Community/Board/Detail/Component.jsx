import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { action as communityAction, CATEGORY, WORLDLIST } from '../../../../modules/community';
// import { Link, Routes, Route, useNavigate } from "react-router-dom";
import LinkIcon from "../../images/link_btn.png";
import AlarmIcon from "../../images/report_btn2.png";

import eyeImg from "../../images/info_eye_new.png";
import dateImg from "../../images/info_sub_date_new.png";
import lineImg from "../../images/btn_line_img.png";
import goldImg from "../../images/goldImg.png";
import reportImg from "../../images/report_btn.png";

import moment from 'moment';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import EditContainer from '../Edit/Container';

const DetailComponent = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Redux에 저장된 값을 가져온다.
    const states = useSelector((state) => state);

    // 라우터 상단의 번호를 가져와 그 번호를 아래 보드 번호로 맞춰준다.
    const { boardId } = useParams();

    // 해당 게시글을 가져오는 요청을 보낸다.
    const boardReq = axios.post("http://localhost:8080/api/board/getBoard", {
        boardId: boardId
    });

    // 해당 게시글의 댓글을 가져오는 요청을 보낸다.
    // 어떤 항목이 필요한지.. 댓글의 boardId가 req.body.boardId와 같은 놈을 모두?
    // 정렬은 어떤 방식으로? -> ... 댓글이 답글이 아닌 놈 기준으로 먼저 단 댓글이 위에 나온다.
    const commentReq = axios.post("http://localhost:8080/api/comment/getComment", {
        boardId: boardId
    });

    // 그냥 출력하면 Promise {<pending>} 형태로 값이 뽑아와 진다.
    // console.log(boardReq);

    // 보드 번호가 변경될 때 Redux에 서버에서 가져온 리스트를 저장해준다.
    useEffect(() => {
        boardReq.then((board) => {
            dispatch(communityAction.board(board?.data));
        });

        commentReq.then((comment) => {
            if (comment.data.length == 0) return;
            dispatch(communityAction.comments(comment?.data));
        });

        // 스크롤 높이 변경
        window.scrollTo({ left: 0, top: 300, behavior: "smooth" });

    }, [boardId]);


    let board = "";
    let boardTagsText = "";
    let comments = [];

    // 랜더링 이후 값을 집어넣어줌
    if (states.community.board) {
        board = states.community.board[0];
        boardTagsText = board?.tags;
    }
    comments = states.community.comments;

    // 엄청난 요청으로 인해 밖으로 빼 useEffect로 감싸줬음
    // 리랜더링시 다시 요청하지 않기 위함
    useEffect(() => {
        // Board 조회수를 수정하는 요청도 보내줌
        const boardReq = axios.post("http://localhost:8080/api/board/eyeCountUpdate", {
            boardId: boardId
        });
    }, []);



    // 현재 라우터 값을 구한다.
    let route = "";
    CATEGORY.forEach((item, idx) => {
        if (item.name == board.category) {
            route = item.label;
        }
    });

    // 현재 로그인 유저 정보
    const userWorld = useSelector((state) => state.user.currServerName);
    const userName = useSelector((state) => state.user.currUserName);

    // 삭제 확인
    let deleteConfirm;

    // 태그 가공(#으로 나눈 배열)
    // #시간 #뉴비
    let boardTags = [];
    boardTagsText.split("#").map((item, idx) => {
        if (item !== "") {
            boardTags.push("#" + item.replace(" ", ""));
            // console.log(boardTags);
        }
    });

    // 댓글 등록
    const [text, setText] = useState("");

    // 온클릭 하면 render를 통해 text의 값이 hi에 저장된다.
    useEffect(() => {
        // 댓글 불러오는 코드
        commentReq.then((comment) => {
            if (comment.data.length == 0) return;
            dispatch(communityAction.comments(comment?.data));
        });
    }, [text]);


    // 아래 세 놈 코드 겹치니까 합치기
    // 공감버튼 클릭시 리랜더링
    const [likeCount, setLikeCount] = useState(0);
    useEffect(() => {
        boardReq.then((board) => {
            dispatch(communityAction.board(board?.data));
        });
        commentReq.then((comment) => {
            if (comment.data.length == 0) return;
            dispatch(communityAction.comments(comment?.data));
        });
    }, [likeCount]);
    // 댓글 입력시 리랜더링
    const [commentCount, setCommentCount] = useState(0);
    useEffect(() => {
        boardReq.then((board) => {
            dispatch(communityAction.board(board?.data));
        });
        commentReq.then((comment) => {
            if (comment.data.length == 0) return;
            dispatch(communityAction.comments(comment?.data));
        });
    }, [commentCount]);
    // 댓글 수정시 리랜더링???
    const [commentValue, setCommentValue] = useState("");
    useEffect(() => {
        boardReq.then((board) => {
            dispatch(communityAction.board(board?.data));
        });
        commentReq.then((comment) => {
            if (comment.data.length == 0) return;
            dispatch(communityAction.comments(comment?.data));
        });
    }, [commentValue]);


    return (
        <>
            <CategoryTItleBox>
                <CategoryTitle>{board?.category}</CategoryTitle>
                <CategoryRight>
                    <Link to={`/Community/${route}`}><span>목록</span></Link>
                </CategoryRight>
            </CategoryTItleBox>

            {/* 게시글 상세 페이지 내용 시작 */}
            <ContentBox>
                <BoardTitle>
                    <BoardTitleSpan>[{board?.world}]</BoardTitleSpan>{" "}
                    <BoardTitleText>{board?.title}</BoardTitleText>
                </BoardTitle>

                {/* 게시글 상단 정보 영역 */}
                <BoardInfoBox>
                    <BoardUserName>
                        {WORLDLIST.map((world, idx) => {
                            if (world.name == board?.userWorld) {
                                return <UserName key={`userName-${idx}`}><UserWorldImg key={`userWorldImg-${idx}`} src={`${world.img}`} style={{ marginRight: "1px" }} /> {board?.userName}</UserName>;
                            } else return;
                        })}
                    </BoardUserName>
                    <BoardInfo>
                        {/* 오른쪽 아이콘 영역 */}
                        <IconInfo>
                            <span style={{ margin: "0px 10px" }}><img src={eyeImg} alt={"조회 아이콘"} />{" "}{board?.eyeCount}{" "}{" "}</span>
                            <span><img src={dateImg} alt={"시간 아이콘"} />{" "}{moment(board?.updatedAt, "YYYY-MM-DDTHH:mm:ssZ").toDate().toLocaleString().slice(0, moment(board?.updatedAt, "YYYY-MM-DDTHH:mm:ssZ").toDate().toLocaleString().length - 3)}</span>
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
                    <LikeBtn onClick={async (e) => {
                        // 공감 클릭시 요청 보내기 : 보드 아이디 보내야 함 board.id
                        // useState도 사용하여 값 변한 것처럼 보이게 한다.
                        const likeCountUpReq = await axios.post("http://localhost:8080/api/board/likeCountUpdate", {
                            boardId: boardId
                        });
                        console.log(likeCountUpReq);
                        setLikeCount(likeCount + 1);
                    }}>
                        {/* <span>❤ 공감하기</span></LikeBtn> */}
                        {/* <span><HeartIcon onClick={(e) => {
                            e.target.classList.toggle("is-active");
                        }}>❤</HeartIcon> 공감하기</span></LikeBtn> */}
                        <span>❤ 공감하기</span></LikeBtn>
                    <LikeCheck><span>{board?.likeCount} 명</span></LikeCheck>
                </LikeWrap>

                {/* 태그 영역 */}
                {/* 태그는 먼저 위에서 잘 가공해 예쁜 배열로 만든다음 map 돌린다. */}
                {/* Link to로 태그검색 가능하게 해도 좋을 것 같다. */}
                <TagWrap>
                    {boardTags.map((item, idx) => {
                        return <Tag key={`tag-${idx}`}>{item}</Tag>;
                    })}
                </TagWrap>

                {/* 수정/삭제 영역 : 로그인 유저와 보드 유저가 같으면 띄운다. */}
                {userName == board.userName ? (
                    <>
                        <UpDelBtnWrap>

                            {/* 등록 창으로 보내고, props로 현재 수정 상태임도 보내준다. */}
                            {/* // 쿼리스트링으로 넘길수도 있을듯 */}
                            <Link to={`./edit`}>
                                <UpDelBtn>수정</UpDelBtn>
                            </Link>


                            <Link to={`/Community/board/${board.id}`}>
                                <UpDelBtn onClick={async () => {
                                    deleteConfirm = window.confirm("정말 삭제하시겠습니까?");

                                    if (deleteConfirm) {
                                        // 보드 id를 기준으로 삭제 요청 보내기
                                        await axios.post("http://localhost:8080/api/board/destroy", {
                                            boardId: board.id,
                                        });

                                        // 해당 커뮤니티 리스트로 이동시키기
                                        navigate(`/Community/${route}`);
                                    }
                                }}>삭제</UpDelBtn>
                            </Link>
                        </UpDelBtnWrap>
                    </>
                ) : ""}


                {/* 댓글 영역 */}
                {/* 여기서부터 댓글 컴포넌트 만들어진 이후에 작업 */}
                <CommentInfo>
                    {/* 몇개인지,색깔바꾸기 */}
                    댓글{" "}
                    <CommentCount>{comments?.length ? comments.length : 0}</CommentCount>
                </CommentInfo>

                {/* 댓글 목록 */}
                {/* 댓글 findAll하는 것도 리덕스에 같이 넣어야 할 것 같다. */}
                {/* 댓글 등록시 유저 월드도 같이 보내도록 한다. */}
                <CommentBox>
                    <CommentWrap>
                        {/* 댓글 개수에 맞게 map 돌린다. */}
                        {/* 하나의 댓글 뭉텅이라고 쳐야할 듯 */}
                        {comments?.map((comment, idx) => {
                            return (
                                <Comment key={`comment-${idx}`}>
                                    {/* 댓글유저정보 */}
                                    <CommentUserInfo key={`commentUserInfo-${idx}`}>
                                        {/* 유저 월드 띄우기 */}
                                        {WORLDLIST.map((item, idx) => {
                                            if (item.name == comment.userWorld) {
                                                return (
                                                    <img key={`userWorld-${idx}`} src={item.img} alt='유저 월드 아이콘'></img>
                                                )
                                            }
                                        })}{" "}
                                        <span key={`userName-${idx}`}>{comment.userName}</span>{" "}
                                        <CommentTimeSpan key={`createTime-${idx}`}>{moment(comment.createdAt, "YYYY-MM-DDTHH:mm:ssZ").toDate().toLocaleString().slice(0, moment(comment.createdAt, "YYYY-MM-DDTHH:mm:ssZ").toDate().toLocaleString().length - 3)}</CommentTimeSpan>

                                        <span style={{ float: "right" }}>
                                            <CommentBtnItem onClick={() => {
                                                alert("답글버튼 클릭");
                                            }}>답글</CommentBtnItem>

                                            {/* 유저 아이디가 댓글 작성 유저 아이디와 같으면 띄운다. */}
                                            {comment.userName == userName ? <>
                                                {/* 요청 보내서 게시글과 유저에 연결된 댓글 수정/삭제하기 -> 파라노이드 처리해서 그냥 지우기? */}

                                                <CommentBtnItem onClick={() => {
                                                    const commentUpdateValue = prompt("수정할 댓글을 입력해주세요.", comment.text);
                                                    if (commentUpdateValue) {
                                                        axios.post("http://localhost:8080/api/comment/update", {
                                                            commentId: comment.id,
                                                            commentText: commentUpdateValue,
                                                        }).then(() => {
                                                            return commentReq;
                                                        }).then((comment) => {
                                                            if (comment.data.length == 0) return;
                                                            setCommentValue(commentUpdateValue);
                                                            dispatch(communityAction.comments(comment?.data));
                                                        });;

                                                    } else {
                                                        return;
                                                    }
                                                    // 기존 값 받아와 인풋창에 출력(oninput, useState)
                                                    // 여기부터 다시 작업

                                                }}>수정</CommentBtnItem>

                                                <CommentBtnItem onClick={async () => {
                                                    const isDel = window.confirm("댓글을 삭제하시겠습니까?");

                                                    if (isDel) {
                                                        const commentDelReq = await axios.post("http://localhost:8080/api/comment/destroy", {
                                                            commentId: comment.id,
                                                            userName: userName,
                                                            boardId: board.id
                                                        });
                                                        switch (commentDelReq.data.status) {
                                                            case 200:
                                                                alert("댓글이 삭제되었습니다.");
                                                                const commentCountDownReq = await axios.post("http://localhost:8080/api/board/commentCountDown", {
                                                                    boardId: boardId
                                                                });
                                                                setText(" ");
                                                                dispatch(communityAction.comments(comment?.data));
                                                                console.log(commentCountDownReq);
                                                                setCommentCount(commentCount - 1);
                                                                return;
                                                            case 400:
                                                                alert("댓글 삭제 불가능합니다.");
                                                                return;
                                                            default:
                                                                break;
                                                        }
                                                    } else {
                                                        return;
                                                    }

                                                }}>삭제</CommentBtnItem>

                                            </> : ""}

                                            {/* 신고할 수 있도록 보내주기 */}
                                            <Link to={"/Support/BugReport/Create"}>
                                                <img src={reportImg} alt={"신고 버튼"} style={{ cursor: "pointer" }}></img>
                                            </Link>
                                        </span>
                                    </CommentUserInfo>
                                    {/* 댓글내용 */}
                                    <CommentValue key={`commentText-${idx}`}>{comment.text}</CommentValue>

                                    {/* 답글 컴포넌트 여기에 추가(바로 아래 붙도록 출력) */}
                                    {/* <>하이</> */}
                                </Comment>
                            );
                        })}
                    </CommentWrap>
                </CommentBox>

                {/* 댓글 입력 */}
                <CommentAddWrap>
                    <CommentAdd>
                        {/* <CommentTextArea name='comment' defaultValue={text} value={text} onInput={(e)=>{ */}
                        <CommentTextArea name='comment' value={text} onInput={(e) => {
                            setText(e.target.value);
                        }}></CommentTextArea>
                        <CommentBtnWrap>
                            <div style={{ fontSize: "25px", marginLeft: "5px" }}>
                                <img src={goldImg} alt='금쪽이' />
                            </div>
                            <CommentAddBtn onClick={async () => {
                                if (!userName) {
                                    alert("로그인이 필요합니다.");
                                    return;
                                }
                                if (!text) {
                                    alert("텍스트를 입력해주세요.");
                                    return;
                                }

                                // 서버쪽에 등록 요청을 보냄
                                const commentAddRed = await axios.post("http://localhost:8080/api/comment/create", {
                                    // 댓글 등록시 보내줄 값
                                    // 1. 댓글 작성 유저 닉네임
                                    // 2. 내용 : value값을 setState한 것을 state에서 가져온다.
                                    // 3. 해당 게시글 번호
                                    // 4. 만약 답글이라면 해당 댓글의 댓글 번호
                                    // 5. 만약 답글이라면 해당 댓글 작성 유저 닉네임
                                    userName: userName,
                                    text: text,
                                    boardId: board?.id,
                                    userWorld: userWorld,
                                });
                                console.log(commentAddRed.data);

                                switch (commentAddRed.data.status) {
                                    case 200:
                                        alert("댓글이 등록되었습니다.");
                                        // 값을 비워준다.
                                        setText("");
                                        // 게시글의 댓글 개수를 +1 해준다.
                                        const commentCountUpReq = await axios.post("http://localhost:8080/api/board/commentCountUp", {
                                            boardId: boardId
                                        });
                                        console.log(commentCountUpReq);
                                        setCommentCount(commentCount + 1);
                                        return;
                                    case 400:
                                        alert("댓글 등록 오류입니다.");
                                        return;
                                    default:
                                        break;
                                }
                            }}>등록</CommentAddBtn>
                        </CommentBtnWrap>

                    </CommentAdd>
                </CommentAddWrap>
            </ContentBox>

            {/* 하트 아이콘 */}
            <HeartIcon onClick={(e) => {
                e.target.classList.toggle("is-active");
            }}>❤</HeartIcon>
            
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
    & span{
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
    /* 드래그 금지 */
    -webkit-touch-callout: none;
     user-select: none;
     -moz-user-select: none;
     -ms-user-select: none;
     -webkit-user-select: none;
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
    /* 드래그 금지 */
    -webkit-touch-callout: none;
     user-select: none;
     -moz-user-select: none;
     -ms-user-select: none;
     -webkit-user-select: none;
`;


const CommentInfo = styled.div`
    float: left;
    width: 100%;
    height: 55px;
    line-height: 55px;
    border-top: 1px solid #e3e3e3;
    /* border-bottom: 1px solid #e3e3e3; */
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
    /* padding: 30px 27px 25px 27px; */
    border-bottom: 1px solid #e3e3e3;
`;
const Comment = styled.div`
    box-sizing: border-box;
    border-top: 1px solid #e3e3e3;
    /* margin: 5px 0; */
    font-size: 15px;
    float: left;
    width: 100%;
    
    padding: 30px 27px 25px 27px;
    &>div:first-child{
        margin-bottom: 10px;
    }
`;
const CommentUserInfo = styled.div`
    & span{
        margin-right: 2px;
    }
`;
const CommentValue = styled.span`
    font-size: 13px;
    color: #555555;
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

const UpDelBtnWrap = styled.div`
    float: left;
    width: 100%;
    height: 60px;
    padding-top: 15px;
    border-top: 1px solid #cecece;
    margin-bottom: 25px;
`;
const UpDelBtn = styled.div`
    float: left;
    margin-left: 7px;
    font-size: 16px;
    text-align: center;
    cursor: pointer;
    background-color: #747A86;
    width: 90px;
    height: 40px;
    line-height: 40px;
    color: #ececec;
    border-radius: 2px;
`;

// 태그
const TagWrap = styled.div`
    float: left;
    background-color: #F9F9F9;
    width: 100%;
    padding: 12px 27px;
    margin-bottom: 16px;
`;
const Tag = styled.span`
    cursor: pointer;
    color: #696969;
    font-size: 13px;
    margin-right: 11px;
`;


// 댓글
const CommentTimeSpan = styled.span`
    font-size: 13px;
    color: #888;
`;
// 댓글 옆의 수정, 삭제, 신고 버튼 UI
const CommentBtnItem = styled.span`
    font-size: 13px;
    border: 1px solid #c4c4c4;
    padding: 4.5px 5px;
    cursor: pointer;
    /* float: left; */
    margin-right: 4px;
    width: 33px;
    height: 30px;
    line-height: 23px;
    text-align: center;
    font-size: 10px;
    border: 1px solid #e3e3e3;
    color: #313131;
    box-sizing: border-box;
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
  
    &.is-active {
        transition-duration: 1s;
        background-position: -2800px 0; 
    }
`;