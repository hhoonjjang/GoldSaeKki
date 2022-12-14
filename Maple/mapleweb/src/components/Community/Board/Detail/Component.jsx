import styled from 'styled-components';
// import { Link, Routes, Route } from "react-router-dom";

const DetailComponent = () => {

    return (
        <>
            {/* 게시글 목록, 게시글 등록도 이런 식으로 추가하기 */}
            <CategoryTItleBox>
                <CategoryTitle>무슨무슨게시판</CategoryTitle>
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
                        나머지정보들
                        <div>조회수, 등록시간</div>{" | "}
                        <div>링크, 신고</div>
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
                <CommentWrap>
                    {/* 몇개인지,색깔바꾸기 */}
                    댓글{" "}
                    <CommentCount>0</CommentCount>
                </CommentWrap>

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


const CommentWrap = styled.div`
    float: left;
    width: 100%;
    height: 55px;
    line-height: 55px;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    /* background-color: #F9F9F9; */
    background-color: #FBF9FA;
    padding: 0 30px;
`;
const CommentCount = styled.div`
    color: #F6890A;
    display: inline-block;
    font-size: 17px;
    font-weight: 600;
`;