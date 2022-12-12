import styled from 'styled-components';
// import { Link, Routes, Route } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const AddComponent = ({categorys}) => {

    return (
        <ContentBox>
            <CategoryTitle>{categorys}</CategoryTitle>
            <CKEditor
                editor={ClassicEditor}
                data="<p>1. 당신의 취미는? <p>&nbsp;</p>2. 당신의 혈액형은?</p><p>&nbsp;</p>"
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
            ></CKEditor>
        </ContentBox>

    );
};

export default AddComponent;

const ContentBox = styled.div`
`;

const CategoryTitle = styled.h1`
    font-size: 34px;
    color: #333;
    margin-top: 60px;
    font-weight: 500;
    width: 100%;
    float: left;
    margin-bottom: 30px;
    height: 40px;
`;