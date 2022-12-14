import styled from 'styled-components';
// import { Link, Routes, Route } from "react-router-dom";

const DetailComponent = () => {

    return (
        <>
            {/* 게시글 목록, 게시글 등록도 이런 식으로 추가하기 */}
            <CategoryTItleBox>
                <CategoryTitle>무슨무슨게시판</CategoryTitle>
                {/* 목록 : 이놈 수정 */}
                <CategoryRight>목록</CategoryRight>
            </CategoryTItleBox>

            {/* 여기서부터 게시글 상세 페이지 내용 시작 */}
            <ContentBox>
                <BoardTitle>
                    <BoardTitleSpan>[오로라]</BoardTitleSpan>{" "}
                    <BoardTitleText>메이플 대박 재미잇다~~^^</BoardTitleText>
                </BoardTitle>
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
    
`;

const ContentBox = styled.div`
    background-color: rgb(245,245,245);
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
    background-color: #F9F9F9;
    word-break: break-all;
    /* font-weight: bold; */
    padding: 37px 27px 30px;
    margin-top: 0 !important;

`;
const BoardTitleSpan = styled.span`
    color: #CA5196;
    font-style: normal;
    font-size: 24px;
`;
const BoardTitleText = styled.span`
    color: #333;
`;