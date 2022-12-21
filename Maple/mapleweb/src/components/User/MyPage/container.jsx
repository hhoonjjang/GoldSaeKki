import MypageComponent from "./Component";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import axios from "axios";
const MypageContainer = () => {
  const [thumbnailImg, setThumbnailImg] = useState("/Img/catimg.png");
  const getUserImg = (currUserName) => {
    console.log("요청하고있니??", currUserName);

    axios
      .post("http://localhost:8080/api/user/getImg", {
        currUserName: currUserName,
      })
      .then((data) => {
        console.log(data);
        setThumbnailImg(data.data);
      });
  };
  return (
    <MypageComponent
      getUserImg={getUserImg}
      thumbnailImg={thumbnailImg}
      setThumbnailImg={setThumbnailImg}
    />
  );
};

export default MypageContainer;
