import MyRequestComponent from "./Component";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";

// axios.post("http://localhost:8080/api/report/request").then((data) => {
//   requestArr = data;
// });

const tempFun = async (setRequest) => {
  try {
    let requestArr = (
      await axios.post("http://localhost:8080/api/report/request")
    ).data;
    setRequest(requestArr);
  } catch (err) {
    console.error(err);
  }
};

const MyRequestContainer = () => {
  const [requestArr, setRequest] = useState([]);
  const [isBoolen, setBoolen] = useState(-1);

  const report = useSelector((state) => state.report);
  const onClick = (idx) => {
    if (idx + 1 == isBoolen) setBoolen(-1);
    else setBoolen(idx + 1);
    console.log(idx + 1);
  };
  useEffect(() => {
    tempFun(setRequest);
  }, []);
  // const temp = tempFun();
  // console.log(temp);
  return (
    <MyRequestComponent
      isBoolen={isBoolen}
      requestArr={requestArr}
      onClick={onClick}
    />
  );
};

export default MyRequestContainer;
