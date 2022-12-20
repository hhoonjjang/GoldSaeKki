import axios from "axios";
import { useEffect, useState, useRef } from "react";
import MainCommunityComponent from "./MainCommunityComponent";

const getCommunityList = async (setCommunityHighView) => {
  try {
    const data = await axios.post(
      "http://localhost:8080/api/board/mainCommunity"
    );
    // console.log(data.data.result);
    // const result = data.data.result;
    const result = data.data.result.sort(function (a, b) {
      return a.category < b.category ? -1 : a.category < b.category ? 1 : 0;
    });
    console.log(result);
    for (let i = 0; i < data.data.result[i].length; i++) {
      const year = result[i].createdAt.slice(0, 4);
      const month = result[i].createdAt.slice(5, 7);
      const date = result[i].createdAt.slice(8, 10);
      result[i].createdAt = `${year}.${month}.${date}`;
    }
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
  }, []);
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
