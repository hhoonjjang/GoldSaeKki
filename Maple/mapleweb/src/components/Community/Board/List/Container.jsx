import ListComponent from "./Component";

const ListContainer = ({categorys, category, route}) =>{
    // console.log(category);

    return (
        <ListComponent categorys={categorys} category={category} route={route} />
    );
}

export default ListContainer;