import styled from "styled-components";
import "../CSS/header.css";
import Menubar from "../menubar/Menubar";
import { useState, useEffect } from "react";

const Header = ({ paint, icon, text }) => {
  return (
    <HeaderComponent paint={paint}>
      <Menubar icon={icon} text={text}></Menubar>
    </HeaderComponent>
  );
};

export default Header;

const HeaderComponent = styled.div`
  position: relative;
  height: 310px;
  background-image: url(${(props) => props.paint});
  background-repeat: no-repeat;
`;
