import axios from "axios";
import { useEffect, useState } from "react";
import HelpCategoryDisplayComponent from "./Component";
import SecondContainer from "./Container2";

const tempChildFun = async (setCategory) => {
  try {
    let categoryArr = (
      await axios.post("http://localhost:8080/api/admin/addtext")
    ).data;

    setCategory(categoryArr);
  } catch (err) {
    console.error(err);
  }
};

const FirstContainer = () => {
  const [categoryArr, setCategory] = useState([]);
  const [editText, setEdit] = useState("");
  const [isBool, setBool] = useState(-1);
  useEffect(() => {
    tempChildFun(setCategory);
  }, []);
  useEffect(() => {}, [categoryArr]);

  const textSubmit = async (category, text) => {
    axios
      .post("http://localhost:8080/api/admin/category", { category, text })
      .then(() => {
        alert("추가되었습니다");
        tempChildFun(setCategory);
      });
  };
  const delBtn = (category) => {
    axios
      .post("http://localhost:8080/api/admin/delcategory", { category })
      .then(() => {
        alert("삭제되었습니다");
        tempChildFun(setCategory);
      });
  };

  const editBtn = (idx, text) => {
    if (idx == isBool) {
      setBool(-1);
    } else setBool(idx);
    setEdit(text);
  };

  const cancel = () => {
    setBool(-1);
  };
  const editSubmit = (category, id) => {
    if (!category) return setBool(-1);
    setBool(-1);
    axios
      .post("http://localhost:8080/api/admin/editcategory", { category, id })
      .then(() => {
        alert("수정되었습니다gd");
        tempChildFun(setCategory);
      });
  };
  return (
    <HelpCategoryDisplayComponent
      categoryArr={""}
      childArr={categoryArr}
      isBool={isBool}
      editText={editText}
      textSubmit={textSubmit}
      delBtn={delBtn}
      editBtn={editBtn}
      editSubmit={editSubmit}
      cancel={cancel}
      a="category"
      b=""
      c=""
    >
      <SecondContainer propsArr={categoryArr} />
    </HelpCategoryDisplayComponent>
  );
};

export default FirstContainer;
