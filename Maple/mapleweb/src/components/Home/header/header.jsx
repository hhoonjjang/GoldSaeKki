import styled from "styled-components";
import "../CSS/header.css";
import Menubar from "../menubar/Menubar";
const Header = ({ bgImg, props }) => {
  return (
    <HeaderComponent>
      <Menubar></Menubar>
      {props}
    </HeaderComponent>
  );
};

export default Header;

const HeaderComponent = styled.div`
  positon: relative;
  height: 310px;
  background-image: ${(props) => props.bgImg};
`;
