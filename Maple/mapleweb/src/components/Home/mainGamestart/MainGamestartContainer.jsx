import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import MainGamestartComponent from "./MainGamestartComponent";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const loginCheck = (setCurrUserName, setCurrUserWorld) => {
  if (document.cookie) {
    try {
      axios.post("http://localhost:8080/api/user/logincheck").then((data) => {
        console.log(data.data.userInfo.name);
        setCurrUserName(data.data.userInfo.name);
        setCurrUserWorld(data.data.userInfo.server);
      });
    } catch (error) {
      console.error(error);
    }
  }
};

const getUserImg = (currUserName, setThumbnailImg) => {
  if (document.cookie) {
    try {
      axios
        .post("http://localhost:8080/api/user/getImg", {
          currUserName: currUserName,
        })
        .then((data) => {
          console.log(data);
          setThumbnailImg(data.data);
        });
    } catch (error) {
      console.error(error);
    }
  }
};

const logout = () => {
  try {
    axios.post("http://localhost:8080/api/user/logout");
  } catch (error) {
    console.error(error);
  }
  // document.cookie = "login" + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
};

const MainGamestartContainer = () => {
  const [_, setRender] = useState(false);
  const [currUserName, setCurrUserName] = useState("");
  const [currUserWorld, setCurrUserWorld] = useState("");
  const navigate = useNavigate();
  const [logoutState, setLogoutState] = useState(false);
  const onlyMainLogoutUpdate = useRef(false);
  const [thumbnailImg, setThumbnailImg] = useState("/Img/catimg.png");

  useEffect(() => {
    loginCheck(setCurrUserName, setCurrUserWorld);
  }, []);

  useEffect(() => {
    if (onlyMainLogoutUpdate.current) {
      logout();
      setRender((state) => !state);
    } else onlyMainLogoutUpdate.current = true;
  }, [logoutState]);

  // const currUserName = useSelector((state) => state.user.currUserName);

  return (
    <MainGamestartComponent
      currUserName={currUserName}
      currUserWorld={currUserWorld}
      logout={logout}
      setLogoutState={setLogoutState}
      getUserImg={getUserImg}
      thumbnailImg={thumbnailImg}
      setThumbnailImg={setThumbnailImg}
    ></MainGamestartComponent>
  );
};

export default MainGamestartContainer;
