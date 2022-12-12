import AddComponent from "./Component";

const AddContainer = ({categorys}) =>{
    // console.log(category);

    // 만약 게시글 추가 버튼을 누르면 게시글을 DB에 추가하고 게시글 목록으로 보낸다.
    return (
        <AddComponent categorys={categorys} />
    );
}

export default AddContainer;