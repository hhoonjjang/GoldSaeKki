import HeaderComponent from "./HeaderComponent";

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { action } from "../../../modules/header";
import { action as imgAction } from "../../../modules/onImg";

const logout = () => {
  try {
    axios.post("http://localhost:8080/api/user/logout").then((data) => {});
  } catch (error) {
    console.error(error);
  }
  // document.cookie = "login" + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
};

const HeaderContainer = () => {
  const headerBanner = useSelector((state) => state.header.banner);
  const headerIcon = useSelector((state) => state.header.icon);
  const headerText = useSelector((state) => state.header.text);
  const currUserName = useSelector((state) => state.user.currUserName);
  const navigate = useNavigate();
  const [logoutState, setLogoutState] = useState(false);
  const onlyHeaderLogoutUpdate = useRef(false);
  const [currUserImgState, setCurrUserImgState] = useState("");
  const dispatch = useDispatch();

  const getUserImg = async (currUserName) => {
    const data = await axios.post("http://localhost:8080/api/user/getImg", {
      currUserName: currUserName,
    });
    console.log(data.data);
    setCurrUserImgState(data.data);
  };

  useEffect(() => {
    if (onlyHeaderLogoutUpdate.current) {
      logout();
      navigate("/");
    } else onlyHeaderLogoutUpdate.current = true;
  }, [logoutState]);

  useEffect(() => {
    if (!currUserName) return;
    console.log(currUserName);
    getUserImg(currUserName);
  }, [currUserName]);

  useEffect(() => {
    if (currUserImgState == "") return;
    else {
      console.log(currUserImgState);
      dispatch(imgAction.onImg(currUserImgState));
    }
  }, [currUserImgState]);
  return (
    <HeaderComponent
      paint={headerBanner}
      icon={headerIcon}
      text={headerText}
      currUserName={currUserName}
      logout={logout}
      setLogoutState={setLogoutState}
      currUserImgState={currUserImgState}
    ></HeaderComponent>
  );
};

export default HeaderContainer;
