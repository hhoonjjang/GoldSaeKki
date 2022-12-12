import styled from "styled-components";
import "../CSS/header.css";
import Menubar from "../menubar/Menubar";
import { useState, useEffect } from "react";

const Header = ({ paint }) => {
  return (
    <HeaderComponent bgImg={paint}>
      <Menubar></Menubar>
      <div className="">
        <div>
          <img src={""} />
          <span></span>
        </div>
        <div>
          <div></div>
          <div>
            <img></img>
          </div>
        </div>
      </div>
    </HeaderComponent>
  );
};

export default Header;

const HeaderComponent = styled.div`
  position: relative;
  height: 310px;
  background-image: url(${(props) => props.bgImg});
  background-repeat: no-repeat;
`;
