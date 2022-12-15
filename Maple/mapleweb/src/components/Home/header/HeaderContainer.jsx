import HeaderComponent from "./HeaderComponent";

import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const HeaderContainer = () => {
  const headerBanner = useSelector((state) => state.header.banner);
  const headerIcon = useSelector((state) => state.header.icon);
  const headerText = useSelector((state) => state.header.text);
  const currUserName = useSelector((state) => state.user.currUserName);
  const [_, setRender] = useState(false);
  const logout = () => {
    document.cookie = "login" + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    setRender((state) => !state);
  };
  return (
    <HeaderComponent
      paint={headerBanner}
      icon={headerIcon}
      text={headerText}
      currUserName={currUserName}
      logout={logout}
    ></HeaderComponent>
  );
};

export default HeaderContainer;
