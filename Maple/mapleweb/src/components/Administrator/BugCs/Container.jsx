import axios from "axios";
import BugCSComponent from "./Component";
import { useEffect, useState } from "react";
const tempFun = async (setReportArr) => {
  try {
    let reportArr = (await axios.post("http://localhost:8080/api/report/bugcs"))
      .data;
    setReportArr(reportArr);
    console.log(reportArr);
  } catch (err) {
    console.error(err);
  }
};

const BugCSContainer = () => {
  const [reportArr, setReportArr] = useState([]);
  const [isBoolen, setBoolen] = useState(-1);

  useEffect(() => {
    tempFun(setReportArr);
  }, []);
  //   tempFun(setReportArr);
  const onClick = (idx) => {
    if (idx + 1 == isBoolen) setBoolen(-1);
    else setBoolen(idx + 1);
    console.log(idx + 1);
  };
  const onAnswer = (answer, idx) => {
    console.log(answer);
    console.log(idx);
    const data = { answer: answer, id: idx };
    console.log(data);
    axios.post("http://localhost:8080/api/report/buganswer", data).then(
      function () {
        tempFun(setReportArr);
        setBoolen(-1);
      },
      (error) => {
        console.error("에러");
      }
    );
  };

  return (
    <BugCSComponent
      isBoolen={isBoolen}
      reportArr={reportArr}
      onClick={onClick}
      onAnswer={onAnswer}
    />
  );
};

export default BugCSContainer;
