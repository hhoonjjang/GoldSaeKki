import HeaderComponent from "./HeaderComponent";

import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  const [_, setRender] = useState(false);
  const navigate = useNavigate();
  const [logoutState, setLogoutState] = useState(false);
  const onlyHeaderLogoutUpdate = useRef(false);

  useEffect(() => {
    if (onlyHeaderLogoutUpdate.current) {
      logout();
      navigate("/");
    } else onlyHeaderLogoutUpdate.current = true;
  }, [logoutState]);

  return (
    <HeaderComponent
      paint={headerBanner}
      icon={headerIcon}
      text={headerText}
      currUserName={currUserName}
      logout={logout}
      setLogoutState={setLogoutState}
    ></HeaderComponent>
  );
};

export default HeaderContainer;
