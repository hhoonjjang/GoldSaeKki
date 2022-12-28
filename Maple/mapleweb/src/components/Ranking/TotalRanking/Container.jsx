import TotalRankingComponent from "./Component";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TotalRankingContainer = () => {
  const [totalData, setTotalData] = useState([]);
  const [serverData, setServerData] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const navigate = useNavigate();

  const totalRanking = () => {
    axios.post("http://localhost:8080/api/rank/total").then((data) => {
      console.log(data.data);
      setTotalData(data.data);
    });
  };

  const serverTotalRanking = (server) => {
    console.log(server);
    axios
      .post("http://localhost:8080/api/rank/totalServer", { server: server })
      .then((data) => {
        console.log(data);
        setServerData(data.data);
      });
  };

  const searchTotalRanking = (searchData) => {
    console.log("서치했다");
    axios
      .post(
        "http://localhost:8080/api/rank/searchTotal?searchData=" + searchData,
        { searchData: searchData }
        // post에서도 쿼리쓸 수 있다. 다음 코드와 같음 객체형식으로 보내주는건 post
      )
      .then((data) => {
        setSearchList(data.data);
        navigate(`/Ranking/${searchData}`);
      });
  };
  return (
    <TotalRankingComponent
      totalData={totalData}
      totalRanking={totalRanking}
      serverTotalRanking={serverTotalRanking}
      serverData={serverData}
      searchTotalRanking={searchTotalRanking}
      searchList={searchList}
    />
  );
};
export default TotalRankingContainer;
