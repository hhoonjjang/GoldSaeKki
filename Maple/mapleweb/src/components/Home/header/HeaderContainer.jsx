import HeaderComponent from "./HeaderComponent";
import { useState, useEffect } from "react";

import headerBanner1 from "../Img/header_banner/header_banner_news.png";
import headerBanner2 from "../Img/header_banner/header_banner_guide.png";
import headerBanner3 from "../Img/header_banner/header_banner_ranking.png";
import headerBanner4 from "../Img/header_banner/header_banner_community.png";
import headerBanner5 from "../Img/header_banner/header_banner_media.png";
import headerBanner6 from "../Img/header_banner/header_banner_support.png";
import { useSelector } from "react-redux";

const HeaderContainer = () => {
  const banner = useSelector((state) => state.header);

  return <HeaderComponent paint={banner} />;
};

export default HeaderContainer;
