import DetailComponent from "./Component";

const DetailContainer = ({categorys, category, route}) =>{
    // console.log(category);

    return (
        <DetailComponent categorys={categorys} category={category} route={route} />
    );
}

export default DetailContainer;