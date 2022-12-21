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
  const [isBool, setBool] = useState(-1);
  const [edit, setEdit] = useState("");

  const textSubmit = (category, text) => {
    if (!category) return alert("카테고리를 선택하세요");
    if (!text) return alert("내용을 입력하세요");

    console.log("category:" + category);
    console.log("text:" + text);
    axios
      .post("http://localhost:8080/api/admin/helptext", { category, text })
      .then(() => {
        alert("추가되었습니다");
        window.location.reload();
      });
  };
  useEffect(() => {
    tempArrFun(setCategory);
  }, []);
  const delCategory = (category) => {
    console.log(category);
    axios
      .post("http://localhost:8080/api/admin/delcategory", { category })
      .then(() => {
        alert("삭제되었습니다");
        tempArrFun(setCategory);
      });
  };
  const editCategory = (category, idx) => {
    if (idx == isBool) {
      setBool(-1);
    } else setBool(idx);
    setEdit(category);
    console.log(idx);
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
        tempArrFun(setCategory);
      });
  };
  return (
    <HelpTextComponet
      delCategory={delCategory}
      textSubmit={textSubmit}
      categoryArr={categoryArr}
      editCategory={editCategory}
      edit={edit}
      isBool={isBool}
      cancel={cancel}
      editSubmit={editSubmit}
    />
  );
};

export default HelpTextContainer;
