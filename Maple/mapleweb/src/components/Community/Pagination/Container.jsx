import CommentComponent from "./Component";

const CommentContainer = ({category}) =>{
    // console.log(category);

    return (
        <CommentComponent category={category} />
    );
}

export default CommentContainer;