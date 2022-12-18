import styled from 'styled-components';
import { Link, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { useEffect, useRef, useState } from 'react';
import { WORLDLIST } from '../../../../modules/community';

import axios from "axios";
import { useSelector } from "react-redux";

// CKEditor 이미지 업로드를 위한 multer 기본 세팅
// const API_URL = "http://localhost:8080";
// const UPLOAD_ENDPOINT = "upload_files";

const AddComponent = ({ categorys, category, route }) => {

    const navigate = useNavigate();

    // 현재 로그인 유저 정보
    const userWorld = useSelector((state) => state.user.currServerName);
    const userName = useSelector((state) => state.user.currUserName);

    const [titleText, setTitleText] = useState("");
    const [contentData, setContentData] = useState("");
    const [tags, setTags] = useState("");
    const [selected, setSelected] = useState(userWorld);
    const handleSelect = (e) => {
        setSelected(e?.target?.value);
    };

    if(!userName){
        console.log("유저 정보가 없습니다."); 
        navigate("/");
        return;
    } 

    // 이미지 등록 시 폼 태그로 감싸주기

    return (

        <>
            <CategoryTitle>{category}</CategoryTitle>

            <ContentBox>
                <TitleWrap>
                    <CategorySelector name='serverName' onChange={handleSelect} value={selected}>
                        {WORLDLIST.map((item, idx) => {
                            if (idx === 0) return null;
                            return <option key={`world-${idx}`} value={`${item.name}`}>{item.name}</option>
                        })}
                    </CategorySelector>


                    {/* 제목값을 가져오기~~ */}
                    {/* 현재 게시판 이름을 저장해 가져와 띄운다. */}
                    <TitleInput type={'text'} placeholder={"제목을 입력해주세요."} onInput={(e) => {
                        setTitleText(e.target.value);
                    }} />

                </TitleWrap>

                <CKEditor
                    editor={ClassicEditor}
                    data="<p>&nbsp;</p>"
                    onReady={(editor) => {
                        // console.log("Editor is ready to use!", editor);
                        console.log("저는 준비 되었습니다 주인님! -Editor", editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                        setContentData(data);
                    }}
                    onBlur={(event, editor) => {
                        console.log("Blur.", editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log("Focus.", editor);
                    }}

                >

                </CKEditor>
                <TagWrap>
                    <TagSpan>태그 달기</TagSpan>
                    <TagInput type={"text"} placeholder={"태그와 태그는 #으로 구분하며, 10개까지 입력하실 수 있습니다."} onInput={(e) => {
                        setTags(e.target.value)
                    }}></TagInput>
                </TagWrap>

                {/* 취소, 등록 버튼 */}
                <ButtonBox>
                    {/* 이놈 href 말고 Link to로 보내야 한다. ! */}
                    <CancelBtn href={`/Community/${route}`} className="btn03_g">취소</CancelBtn>
                    <RegistBtn className="btn03_g" onClick={async (e) => {

                        // 서버쪽에 등록 요청을 보낸다.
                        const regist = await axios.post("http://localhost:8080/api/board/create", {
                            title: titleText,
                            world: selected,
                            category: category,
                            contents: contentData,
                            tags: tags,
                            userName: userName,
                            userWorld: userWorld,
                        });

                        // 불안정한 코드
                        console.log(regist.data);
                        const boardId = regist.data?.tempBoard?.id;

                        // 응답 받아오기
                        switch (regist.data.status) {
                            case 200:
                                // 성공 알람, 게시물 상세 페이지로 리턴
                                alert("게시글 등록됨");
                                navigate(`/Community/board/${boardId}`);
                                return;
                            case 400:
                                alert("게시글 등록 에러");
                                return;
                            case 401:
                                alert("유저 정보가 없습니다.");
                                return;
                            default:
                                break;
                        }

                    }}>등록</RegistBtn>
                </ButtonBox>

                {/* 값을 보기 위해 임시로 만듬 : 일단 값 잘 받아와짐 */}
                {/* 나중에 이미지도 추가할 수 있게 하기 */}
                {/* <div>내용 : {contentData}</div> */}

            </ContentBox>
        </>
    );
};

export default AddComponent;

const ContentBox = styled.div`

    &>div{
        float: left;
    }
    & input:focus, & div:focus{
        outline: none;
    }

    /* ckEditor css 설정 */
    & .ck-content{
        height: 560px;
    }
    & .ck-rounded-corners{
        width: 100%;
    }
    & .ck-editor__editable{
        padding: 0 15px;
    }
    & .ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){
        border: 1px solid #CCCED1;
    }

`;

const TitleWrap = styled.div`
    /* margin-top: 30px; */
    height: 50px;
    float: left;
    width: 100%;
    border-bottom: none;
    display: flex;
    align-items: center;
    padding : 0 20px;
    background-color: #F9F9F9;
    border : none;
    border-top: 1px solid #7E7E7E;
    /* border-bottom: 1px solid #CCCED1; */
    /* border-bottom: 1px solid #CCCED1; */
`;
const CategorySelector = styled.select`
    font-size: 13px;
    height: 32px;
    padding: 0 42px 0 20px;
    margin-right: 10px;
    border : 1px solid #CCCED1;
    cursor: pointer;
`;
const TitleInput = styled.input`
    height: 32px;
    width: 730px;
    padding: 0 10px;
    font-size: 15px;
    border : 1px solid #CCCED1;
`;

const CategoryTitle = styled.h1`
    font-size: 28px;
    color: #333;
    margin-top: 60px;
    font-weight: 600;
    width: 100%;
    float: left;
    height: 40px;
    margin-bottom: 80px;
    cursor: default;
`;

const TagWrap = styled.div`
    border : 1px solid #CCCED1;
    /* margin-top: 30px; */
    height: 50px;
    float: left;
    width: 100%;
    border-top: none;
    display: flex;
    align-items: center;
`;
const TagSpan = styled.span`
    line-height: 50px;
    float: left;
    margin-left: 27px;
    font-size: 15px;
    color: #333;
    padding-right: 21px;
    background: url(https://ssl.nexon.com/s2/game/maplestory/renewal/common/tag_title_bg.png) right 17px no-repeat;
`;
const TagInput = styled.input`
    margin-left: 20px;
    height: 32px;
    width: 760px;
    border-radius: 0;
    border: 1px solid #CCCED1;
    font-size: 15px;
    padding: 0 10px;
`;

const ButtonBox = styled.div`
    width: 100%;
    float: left;
    margin: 16px 0;
    display: flex;
    justify-content: center;
`;
const CancelBtn = styled.a`
    min-width: 53px;
    font-size: 15px;
    color: #fff;
    text-align: center;
    background-color: #747a86;
    border-radius: 2px;
    padding: 12px 24px;
    border: 1px solid #747a86;
    display: inline-block;
    line-height: 1;
    margin: 0 5px;
    &:hover{
        color: white;
        background-color: #636872;
    }
`;
const RegistBtn = styled.a`
    min-width: 53px;
    font-size: 15px;
    color: #fff;
    text-align: center;
    /* background-color: #485F9C; */
    /* background-color: #D271A8; */
    background-color: #da63a6;
    border-radius: 2px;
    padding: 12px 24px;
    /* border: 1px solid #747a86; */
    display: inline-block;
    line-height: 1;
    margin: 0 5px;
    cursor: pointer;
    &:hover{
        color: white;
        /* background-color: #324B90; */
        background-color: #CA5196;
    }
`;