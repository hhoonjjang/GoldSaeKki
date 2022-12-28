import React, { useEffect } from "react";
import styled from "styled-components";
// import catErrorImg from "../src/components/Community/images/mong03b.gif";
import catErrorImg from "./images/mong03b.gif";
import errorImg from "./images/errrrrrr.png";
import monaImg from "./images/mona-loading-dark.gif";

export const NotFound = () => {

    // 페이지 도착시 스크롤 높이 변경
    useEffect(() => {
        window.scrollTo({ left: 0, top: 270, behavior: "smooth" });
        window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    }, []);

    return <NotFoundBox>
        {/* <h1>안녕하세요</h1> */}
        {/* <h1 onClick={()=>{
            window.location.href = "https://github.com/hhoonjjang/GoldSaeKki";
        }}>HAPPY HACKING~</h1> */}
        {/* }}>404~</h1> */}

        <NotFoundImg src={catErrorImg} alt="404페이지" onClick={()=>{
            window.location.href = "../";
        }}></NotFoundImg>
        {/* <NotFoundImg src={errorImg} alt="404페이지" onClick={() => {
            window.location.href = "https://github.com/hhoonjjang/GoldSaeKki";
        }}></NotFoundImg> */}


        {/* <NotFoundImg src={monaImg} alt="404페이지" onClick={()=>{
            window.location.href = "https://github.com/efforthye";
        }}></NotFoundImg> */}

    </NotFoundBox>;
};

export default NotFound;

const NotFoundBox = styled.div`
    /* display: flex; */
    /* justify-content: center; */
    /* margin-top: 50px; */
    /* margin-top: 200px; */
    text-align: center;
    text-shadow: -1.5px 0 #000, 0 1.5px #000, 1.5px 0 #000, 0 -1.5px #000;
    color: #C9D1D9;
    cursor: pointer;
`;
const NotFoundImg = styled.img`
    cursor: pointer;
    height: 100vh;
    /* width: 100vw; */
`;
