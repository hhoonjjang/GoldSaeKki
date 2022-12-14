import styled from 'styled-components';
// import { Link, Routes, Route } from "react-router-dom";

const ListComponent = () => {

    return (
        <>
            {/* 현재 게시판 이름을 가져와 띄운다. */}
            <CategoryTitle>자유게시판</CategoryTitle>
            <ContentBox>
                {/* 월드 선택 */}
                <WorldBox>
                    <WorldSpan className='active'>전체월드</WorldSpan>
                    <WorldSpan>임시월드</WorldSpan>
                    <WorldSpan>목록먼저</WorldSpan>
                    <WorldSpan>만들기</WorldSpan>
                    <WorldSpan>만들기</WorldSpan>
                    <WorldSpan>만들기</WorldSpan>
                    <WorldSpan>만들기</WorldSpan>
                    <WorldSpan>만들기</WorldSpan>
                    <WorldSpan>만들기</WorldSpan>
                    <WorldSpan>만들기</WorldSpan>
                    <WorldSpan>만들기</WorldSpan>
                    <WorldSpan>만들기</WorldSpan>
                </WorldBox>

                {/* 게시글 목록 */}
                <ListBox>
                    {/* 여기서 map 돌리기 */}
                    <OneBoardList>
                        <BoardTitle>
                            {/* a : Link to로 바꾼뒤 해당 게시물로 보내줘야 함 : 게시글 번호 */}
                            <a href="/Community/Free/354367?search=c%253d3" style={{ color: "rgb(51, 51, 51)" }}>
                                <span class="server">[오로라]</span>{" "}
                                <span class="title">나제목임나제목임나제목임나제목임나제목임나제목임나제목임나제목임나제목임나제목임나제목임나제목임나제목임나제목임</span>

                                {/* 새로 올라온 게시물인지, 이미지가 있는지 여부에 따라 옆에 이미지 아이콘을 띄운다. : 일단 모두 없앰 */}
                                {/* <img class="new" src="https://ssl.nexon.com/s2/game/maplestory/renewal/common/new.png" alt="" /> */}
                            </a>
                        </BoardTitle>
                        <OtherBoardInfo>
                            {/* 유저 서버 아이콘도 될수있으면 띄우기 : 이름/아이콘 누르면 해당 캐릭터 정보로 이동함 */}
                            {/* 유저 이름은 제목의 오른쪽에 붙이는 게 나을 것 같다. */}
                            <UserName>
                                🎂 하이하이
                            </UserName>
                            <IconInfoWrap>
                                <IconInfo className='heart'>11</IconInfo>
                                <IconInfo className='date'>날짜디비</IconInfo>
                                <IconInfo className='eyeCount'>0</IconInfo>
                            </IconInfoWrap>
                        </OtherBoardInfo>
                    </OneBoardList>


                    <OneBoardList>
                        <BoardTitle>
                            <a href="/Community/Free/354367?search=c%253d3" style={{ color: "rgb(51, 51, 51)" }}>
                                <span class="server">[오로라]</span>{" "}
                                <span class="title">나제목임나제목임나제목임나제목임나제목임나제목임나제목임나제목임나제목임나제목임나제목임나제목임나제목임나제목임</span>
                            </a>
                        </BoardTitle>
                        <OtherBoardInfo>
                            <UserName>
                                🈺 냐냐냔냐
                            </UserName>
                            <IconInfoWrap>
                                <IconInfo className='heart'>1</IconInfo>
                                <IconInfo className='date'>날짜디비</IconInfo>
                                <IconInfo className='eyeCount'>2222</IconInfo>
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
            </ContentBox>
        </>
    );
};

export default ListComponent;

const AllWrap = styled.div`
    &>div{
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
    /* min-height: 800px; */
    background-color: #ffffff;
    box-sizing: border-box;
    /* border: 1px solid lightgray; */
    float: left;
    &>div{
        float: left;
    }
`;

const WorldBox = styled.div`
    width: 100%;
    min-height: 130px;
    border: 1px solid #e9eaee;
    /* background-color: #f9f9fb; */
    background-color: #fbf9fa;
    margin-bottom: 30px;
    padding: 26px 0 0 26px;
`;
const WorldSpan = styled.span`
    float: left;
    width: 90px;
    height: 34px;
    /* border: 1px solid #ebf2f8; */
    border: 1px solid #f8ebf2cc;
    /* background-color: #ebf2f8; */
    background-color: #f8ebf2cc;
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

    &.active, &:hover{
        background-color: #CA5196;
        border: 1px solid #CA5196;
        color: #f3f1f1;
    }
`;

const ListBox = styled.div`
    float: left;
    width: 100%;
    /* min-height: 800px; */
    /* background-color: rgb(245,245,245); */
    border-top: 1px solid #C8C8D5;
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
    &>a .server{
        font-size: 16px;
        margin-right: 5px;
        float: left;
        color: #CA5196;
    }
    &>a .title{
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
    font-family: "NanumBarunGothic" , "Malgun Gothic" , sans-serif;
    line-height: 1.4;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    cursor: default;
`;
const IconInfoWrap = styled.div`
    float: left;
    &>div:first-child{
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
    /* max-width: 300px; */
    /* text-overflow: ellipsis; */
    white-space: nowrap;
    overflow: hidden;

    &.heart{
        background: url(https://ssl.nexon.com/s2/game/maplestory/renewal/common/heart2_new.png) left 0px no-repeat;
        padding-left: 18px;
        /* min-width: 35px; */
        max-width: 55px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    &.date{
        background: url(https://ssl.nexon.com/s2/game/maplestory/renewal/common/sub_date_new.png) left 0px no-repeat;
        padding-left: 18px;
        min-width: 80px !important;
        max-width: 100px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    &.eyeCount{
        background: url(https://ssl.nexon.com/s2/game/maplestory/renewal/common/eye_new.png) left 0px no-repeat;
        padding-left: 18px;
        min-width: 45px;
        max-width: 70px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
`;