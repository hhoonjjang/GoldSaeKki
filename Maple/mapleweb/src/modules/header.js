import headerBanner1 from "../components/Home/Img/header_banner/header_banner_news.png";
import headerBanner2 from "../components/Home/Img/header_banner/header_banner_guide.png";
import headerBanner3 from "../components/Home/Img/header_banner/header_banner_ranking.png";
import headerBanner4 from "../components/Home/Img/header_banner/header_banner_community.png";
import headerBanner5 from "../components/Home/Img/header_banner/header_banner_media.png";
import headerBanner6 from "../components/Home/Img/header_banner/header_banner_support.png";

import headericon1 from "../components/Home/Img/header_banner/header_icon_news.png";
import headericon2 from "../components/Home/Img/header_banner/header_icon_guide.png";
import headericon3 from "../components/Home/Img/header_banner/header_icon_ranking.png";
import headericon4 from "../components/Home/Img/header_banner/header_icon_community.png";
import headericon5 from "../components/Home/Img/header_banner/header_icon_media.png";
import headericon6 from "../components/Home/Img/header_banner/header_icon_support.png";

const TYPE = {
  HEADER: "/header",
};

const header = (category) => {
  return {
    type: TYPE.HEADER,
    payload: { category },
  };
};

export const action = { header };

export const initialize = "";

export const reducer = (state = initialize, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.HEADER:
      switch (payload.category) {
        case "News":
          return headerBanner1;
        case "Guide":
          return headerBanner2;
        case "Ranking":
          return headerBanner3;
        case "Community":
          return headerBanner4;
        case "Media":
          return headerBanner5;
        case "Support":
          return headerBanner6;
        default:
          return state;
      }
    default:
      return state;
  }
};
