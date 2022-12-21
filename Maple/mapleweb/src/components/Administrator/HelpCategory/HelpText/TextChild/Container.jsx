import axios from "axios";
import { useEffect, useState } from "react";
import TextChildComponent from "./Component";

const tempArrFun = async (setText) => {
  try {
    let textArr = (await axios.post("http://localhost:8080/api/admin/addchild"))
      .data;
    setText(textArr);
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

const TextChildContainer = () => {
  const [textArr, setText] = useState([]);
  const [childArr, setChildText] = useState([]);
  const [isBoolen, setBoolen] = useState(-1);
  const [textEdit, setTextEdit] = useState("");
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
  const delText = (text) => {
    console.log(text);
    axios.post("http://localhost:8080/api/admin/deltext", { text }).then(() => {
      alert("삭제되었습니다");
      tempArrFun(setText);
    });
  };

  const delChild = (text) => {
    console.log(text);
    axios
      .post("http://localhost:8080/api/admin/delchild", { text })
      .then(() => {
        alert("삭제되었습니다");
        tempChildFun(setChildText);
      });
  };
  const editChild = (idx, text) => {
    console.log(idx);
    console.log(idx);
    if (idx == isBool) {
      setBool(-1);
    } else setBool(idx);
    setEdit(text);
  };
  const editTextCategory = (idx, text) => {
    if (idx == isBoolen) {
      setBoolen(-1);
    } else setBoolen(idx);
    setTextEdit(text);
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

  const editCategorySubmit = (text, id) => {
    console.log(text);
    if (!text) return setBoolen(-1);
    console.log(text, id);
    setBoolen(-1);
    axios
      .post("http://localhost:8080/api/admin/edittext", { text, id })
      .then(() => {
        tempArrFun(setText);
      });
  };
  const categoryCancel = () => {
    setBoolen(-1);
  };
  console.log(textArr);
  console.log(childArr);
  return (
    <>
      <TextChildComponent
        delText={delText}
        textArr={textArr}
        textSubmit={textSubmit}
        editTextCategory={editTextCategory}
        editCategorySubmit={editCategorySubmit}
        textEdit={textEdit}
        isBoolen={isBoolen}
        childArr={childArr}
        delChild={delChild}
        editChild={editChild}
        isBool={isBool}
        editText={editText}
        editSubmit={editSubmit}
        cancel={cancel}
        categoryCancel={categoryCancel}
      />
    </>
  );
};

export default TextChildContainer;
