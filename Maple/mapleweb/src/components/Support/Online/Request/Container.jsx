import UncontrolledExample from "./Component";
import { useEffect, useState } from "react";
import axios from "axios";
const categoryArrFun = async (setCategory) => {
  try {
    let categoryArr = (
      await axios.post("http://localhost:8080/api/support/displaycategory")
    ).data;
    setCategory(categoryArr);
  } catch (err) {
    console.error(err);
  }
};

const RequestContainer = () => {
  const [categoryArr, setCategory] = useState([]);
  useEffect(() => {
    categoryArrFun(setCategory);
  }, []);
  console.log(categoryArr);
  return <UncontrolledExample categoryArr={categoryArr} />;
};

export default RequestContainer;
