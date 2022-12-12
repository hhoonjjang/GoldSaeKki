import ListComponent from "./Component";

const ListContainer = ({category}) =>{
    // console.log(category);

    return (
        <ListComponent category={category} />
    );
}

export default ListContainer;