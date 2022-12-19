import EditComponent from "./Component";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ReactHtmlParser from "react-html-parser";

const EditContainer = ({categorys, category, route}) =>{
    // console.log(category);

    const registClick = () =>{
    }

    // 만약 게시글 추가 버튼을 누르면 게시글을 DB에 추가하고 게시글 목록으로 보낸다.
    return (
        <EditComponent categorys={categorys} category={category} route={route} />
    );
}

export default EditContainer;