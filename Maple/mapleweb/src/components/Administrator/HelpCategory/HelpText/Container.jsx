import { useEffect, useState } from "react";
import HelpTextComponet from "./Componet";
import axios from "axios";
const tempArrFun = async (setCategory) => {
  try {
    let categoryArr = (
      await axios.post("http://localhost:8080/api/admin/addtext")
    ).data;

    setCategory(categoryArr);
  } catch (err) {
    console.error(err);
  }
};

const HelpTextContainer = () => {
  const [categoryArr, setCategory] = useState([]);
  const textSubmit = (category, text) => {
    console.log("category:" + category);
    console.log("text:" + text);
  };
  useEffect(() => {
    tempArrFun(setCategory);
  }, []);
  console.log(categoryArr);

  return <HelpTextComponet textSubmit={textSubmit} categoryArr={categoryArr} />;
};

export default HelpTextContainer;
