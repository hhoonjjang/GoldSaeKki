import styled from 'styled-components';
// import { Link, Routes, Route } from "react-router-dom";

const ListComponent = ({category}) => {
    // console.log(category);

    return (
        <ListWrap>
            {/* 네비바 영역 */}
            <ListBox>
                내용 : {category}
            </ListBox>
        </ListWrap>
    );
};

export default ListComponent;

const ListWrap = styled.div`
    font-size: 20px;
    height: 64px;
    background-color: white;
    position: sticky;
    top: 62px;
    border-top: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
`;

const ListBox = styled.div`
    margin: 0 auto;
    width: 1200px;
    background-color: rgb(245,245,245);
    height: inherit;


`;