import axios from "axios";
import { useEffect, useState } from "react";
import HelpCategoryDisplayComponent from "./Component";
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

const tempChildFun = async (setText) => {
  try {
    let textArr = (await axios.post("http://localhost:8080/api/admin/addchild"))
      .data;
    setText(textArr);
  } catch (err) {
    console.error(err);
  }
};
const SecondContainer = () => {
  const [categoryArr, setCategory] = useState([]);
  const [textArr, setText] = useState([]);
  const [editText, setEdit] = useState("");
  const [isBool, setBool] = useState(-1);
  useEffect(() => {
    tempArrFun(setCategory);
    tempChildFun(setText);
  }, []);

  const textSubmit = (category, text) => {
    if (!category) return alert("카테고리를 선택하세요");
    if (!text) return alert("내용을 입력하세요");

    console.log("category:" + category);
    console.log("text:" + text);
    axios
      .post("http://localhost:8080/api/admin/helptext", { category, text })
      .then(() => {
        alert("추가되었습니다");

        tempChildFun(setText);
      });
  };

  const delBtn = (text) => {
    console.log(text);
    axios.post("http://localhost:8080/api/admin/deltext", { text }).then(() => {
      alert("삭제되었습니다");
      tempChildFun(setText);
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
  const editCategorySubmit = (text, id) => {
    console.log(text);
    if (!text) return setBool(-1);
    console.log(text, id);
    setBool(-1);
    axios
      .post("http://localhost:8080/api/admin/edittext", { text, id })
      .then(() => {
        tempChildFun(setText);
      });
  };
  return (
    <HelpCategoryDisplayComponent
      categoryArr={categoryArr}
      childArr={textArr}
      isBool={isBool}
      editText={editText}
      textSubmit={textSubmit}
      delBtn={delBtn}
      editBtn={editBtn}
      editSubmit={editCategorySubmit}
      cancel={cancel}
      a="text"
      b="helpCategory"
    />
  );
};

export default SecondContainer;