import styled from 'styled-components';
import { Link, Routes, Route, useLocation } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useEffect, useRef, useState } from 'react';

// CKEditor 이미지 업로드를 위한 multer 기본 세팅
// const API_URL = "http://localhost:8080";
// const UPLOAD_ENDPOINT = "upload_files";

const AddComponent = ({ categorys }) => {

    const CKHeight = useRef();



    return (
        <ContentBox>
            <CategoryTitle>게시글등록</CategoryTitle>

            {/* <TitleWrap>
                이곳에 서버 선택 추가하기
                <CategorySelector name='serverName'>
                    <option value="스카니아">스카니아</option>
                    <option value="오로라">오로라</option>
                    <option value="홀리랜드">홀리랜드</option>
                </CategorySelector>
                <TitleInput type={'text'} placeholder={"제목을 입력해주세요."}  />
            </TitleWrap> */}

            <CKEditor
                editor={ClassicEditor}
                data="<p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>"
                onReady={(editor) => {
                    console.log("Editor is ready to use!", editor);
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
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
                <TagInput type={"text"} placeholder={"태그와 태그는 #으로 구분하며, 15개까지 입력하실 수 있습니다."}></TagInput>
            </TagWrap>
        </ContentBox>

    );
};

export default AddComponent;

const ContentBox = styled.div`

    & .ck-content{
        height: 500px;
    }

`;

const TitleWrap = styled.div`
    border : 1px solid #CCCED1;
    /* margin-top: 30px; */
    height: 40px;
    float: left;
    width: 100%;
    border-bottom: none;

`;
const CategorySelector = styled.select`

`;
const TitleInput = styled.input`

`;

const CategoryTitle = styled.h1`
    font-size: 30px;
    color: #333;
    margin-top: 60px;
    font-weight: 500;
    width: 100%;
    float: left;
    margin-bottom: 30px;
    height: 40px;
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
    font-size: 16px;
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
    

`;