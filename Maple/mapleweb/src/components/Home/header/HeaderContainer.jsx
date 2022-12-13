import HeaderComponent from "./HeaderComponent";

import { useSelector } from "react-redux";

const HeaderContainer = () => {
  const headerBanner = useSelector((state) => state.header.banner);
  const headerIcon = useSelector((state) => state.header.icon);
  const headerText = useSelector((state) => state.header.text);
  return (
    <HeaderComponent
      paint={headerBanner}
      icon={headerIcon}
      text={headerText}
    ></HeaderComponent>
  );
};

export default HeaderContainer;
