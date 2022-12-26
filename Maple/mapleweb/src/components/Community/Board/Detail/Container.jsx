import axios from "axios";
import DetailComponent from "./Component";

const DetailContainer = ({categorys, category, route}) =>{
    // console.log(category);
    const reportBoard = (id)=>{
        console.log(id)
        axios.post("http://localhost:8080/api/board/reportboard",{id}).then((data)=>{
            console.log(data.data)
            alert(data.data);
        })
    }
    const reportComment = (id)=>{
        axios.post("http://localhost:8080/api/comment/reportcomment",{id}).then((data)=>{
            console.log(data.data)
            alert(data.data)
        })
    }
    return (
        <DetailComponent categorys={categorys} category={category} route={route} reportBoard={reportBoard} reportComment={reportComment} />
    );
}

export default DetailContainer;