import axios from "axios";
import { useEffect, useState } from "react";
import HelpCategoryDisplayComponent from "./Component";

const tempArrFun = async (setText) => {
  try {
    let textArr = (await axios.post("http://localhost:8080/api/admin/addchild"))
      .data;
    setText(textArr);
    console.log(textArr);
  } catch (err) {
    console.error(err);
  }
};

const tempChildFun = async (setChildText) => {
  let childArr = (
    await axios.post("http://localhost:8080/api/admin/displaychild")
  ).data;
  setChildText(childArr);
};

const ThirdContainer = ({ propsArr }) => {
  console.log(propsArr);
  const [textArr, setText] = useState([]);
  const [childArr, setChildText] = useState([]);
  const [isBool, setBool] = useState(-1);
  const [editText, setEdit] = useState("");

  useEffect(() => {
    tempArrFun(setText);
    tempChildFun(setChildText);
  }, []);

  const textSubmit = (category, text) => {
    if (!category) return alert("카테고리를 선택하세요");
    if (!text) return alert("내용을 입력하세요");
    console.log(category);
    console.log(text);
    axios
      .post("http://localhost:8080/api/admin/addchildtext", {
        category,
        text,
      })
      .then(() => {
        alert("추가되었습니다");
        tempChildFun(setChildText);
      });
  };
  const delBtn = (text) => {
    console.log(text);
    axios
      .post("http://localhost:8080/api/admin/delchild", { text })
      .then(() => {
        alert("삭제되었습니다");
        tempChildFun(setChildText);
      });
  };
  const editBtn = (idx, text) => {
    console.log(idx);
    console.log(idx);
    if (idx == isBool) {
      setBool(-1);
    } else setBool(idx);
    setEdit(text);
  };
  const editSubmit = (text, id) => {
    if (!text) return setBool(-1);
    console.log(text);
    console.log(id);
    setBool(-1);
    axios
      .post("http://localhost:8080/api/admin/editchild", { text, id })
      .then(() => {
        tempChildFun(setChildText);
      });
  };
  const cancel = () => {
    setBool(-1);
  };
  return (
    <HelpCategoryDisplayComponent
      categoryArr={propsArr}
      childArr={childArr}
      isBool={isBool}
      editText={editText}
      textSubmit={textSubmit}
      delBtn={delBtn}
      editBtn={editBtn}
      editSubmit={editSubmit}
      cancel={cancel}
      a="textChild"
      b="textCategory"
      c="text"
    />
  );
};

export default ThirdContainer;
