import styled from 'styled-components';
// import { Link, Routes, Route, useNavigate } from "react-router-dom";
import LinkIcon from "../../images/link_btn.png";
import AlarmIcon from "../../images/report_btn2.png";


const DetailComponent = ({categorys, category}) => {

    

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
                    <BoardTitleSpan>[오로라]</BoardTitleSpan>{" "}
                    <BoardTitleText>"그의 노력을 폄하하려는 의도는 아니었다."</BoardTitleText>
                </BoardTitle>

                {/* BoardInfo */}
                <BoardInfoBox>
                    <BoardUserName>
                        {/* 서버(월드)아이콘과 닉네임 map으로 출력하기 */}
                        🈺 efforthye
                    </BoardUserName>
                    <BoardInfo>
                        {/* 나머지정보들 */}
                        <div>조회수, 등록시간</div>{" | "}
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

                {/* 내용 영역 */}
                <BoardContent>
                    <p>내용내용</p><p>내용내용</p><p>크크크</p><p>내용내용</p><p>내용내용</p><p>내용내용</p>
                </BoardContent>

                {/* 공감영역 */}
                <LikeWrap>
                    <LikeBtn><span>❤ 공감하기</span></LikeBtn>
                    <LikeCheck><span>0 명</span></LikeCheck>
                </LikeWrap>
                {/* <LikeWrap>
                    <LikeBtn>공감하기</LikeBtn>
                    <LikeCheck>12121212명</LikeCheck>
                </LikeWrap> */}


                {/* 댓글 영역 */}
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
                            <div style={{fontSize:"25px", marginLeft:"5px"}}>🦢</div>
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