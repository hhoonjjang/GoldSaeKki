import ListComponent from "./Component";

const ListContainer = ({categorys, category}) =>{
    // console.log(category);

    return (
        <ListComponent categorys={categorys} category={category} />
    );
}

export default ListContainer;