import ListComponent from "./Component";

const ListContainer = ({category, route}) =>{
    console.log(category);

    return (
        <ListComponent category={category} route={route} />
    );
}

export default ListContainer;