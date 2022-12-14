import DetailComponent from "./Component";

const DetailContainer = ({category}) =>{
    // console.log(category);

    return (
        <DetailComponent category={category} />
    );
}

export default DetailContainer;