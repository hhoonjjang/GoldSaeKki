import axios from "axios";
import { useEffect, useState, useRef } from "react";
import MainCommunityComponent from "./MainCommunityComponent";

const getCommunityList = async (setCommunityHighView) => {
  try {
    const data = await axios.post(
      "http://localhost:8080/api/board/mainCommunity"
    );
    const result = data.data.result.sort(function (a, b) {
      return a.category < b.category ? -1 : a.category < b.category ? 1 : 0;
    });
    console.log(result);
    setCommunityHighView(result);
  } catch (error) {
    console.error(error);
  }
};

const MainCommunityContainer = () => {
  const [communityNewestPost, setCommunityHighView] = useState([]);
  const onlyMainCommunity = useRef(false);

  useEffect(() => {
    getCommunityList(setCommunityHighView);
    console.log(communityNewestPost);
  }, []);
  console.log(communityNewestPost);
  useEffect(() => {
    if (onlyMainCommunity.current) console.log(communityNewestPost[0]);
    else onlyMainCommunity.current = true;
  }, [communityNewestPost]);
  return (
    <MainCommunityComponent
      communityNewestPost={communityNewestPost}
    ></MainCommunityComponent>
  );
};
export default MainCommunityContainer;
