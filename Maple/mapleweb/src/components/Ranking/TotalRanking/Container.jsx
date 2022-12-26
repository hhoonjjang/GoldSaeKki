import TotalRankingComponent from "./Component";
import axios from "axios";
import { useState } from "react";

const TotalRankingContainer = () => {
  const [totalData, setTotalData] = useState([]);
  const totalRanking = () => {
    axios.post("http://localhost:8080/api/rank/total").then((data) => {
      console.log(data.data);
      setTotalData(data.data);
    });
  };
  return (
    <TotalRankingComponent totalData={totalData} totalRanking={totalRanking} />
  );
};
export default TotalRankingContainer;
