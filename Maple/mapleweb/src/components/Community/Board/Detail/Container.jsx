import DetailComponent from "./Component";

const DetailContainer = ({categorys, category}) =>{
    // console.log(category);

    return (
        <DetailComponent categorys={categorys} category={category} />
    );
}

export default DetailContainer;