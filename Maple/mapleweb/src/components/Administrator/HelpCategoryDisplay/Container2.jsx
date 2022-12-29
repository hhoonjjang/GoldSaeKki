import axios from "axios";
import { useEffect, useState } from "react";
import HelpCategoryDisplayComponent from "./Component";
import ThirdContainer from "./Container3";
const tempArrFun = async (setCategory) => {
  try {
    let categoryArr = (
      await axios.post("/api/admin/addtext")
    ).data;

    setCategory(categoryArr);
  } catch (err) {
    console.error(err);
  }
};

const tempChildFun = async (setText) => {
  try {
    let textArr = (await axios.post("/api/admin/addchild"))
      .data;
    setText(textArr);
  } catch (err) {
    console.error(err);
  }
};
const SecondContainer = ({ propsArr }) => {
  console.log(propsArr);
  const [categoryArr, setCategory] = useState([]);
  const [textArr, setText] = useState([]);
  const [editText, setEdit] = useState("");
  const [isBool, setBool] = useState(-1);
  const [changeToArr,setChangeTo] = useState([]);
  const [changeFromArr,setChangeFrom] =useState([])
  useEffect(() => {
    tempArrFun(setCategory);
    tempChildFun(setText);
  }, []);
  useEffect(() => {
    tempChildFun(setText);

  }, [propsArr]);
  const textSubmit = (category, text) => {
    if (!category || category=="선택하시오") return alert("카테고리를 선택하세요");
    if(!text.match(/\S/g)) return alert("내용을 입력하세요");

    console.log("category:" + category);
    console.log("text:" + text);
    axios
      .post("/api/admin/helptext", { category, text })
      .then(() => {
        alert("추가되었습니다");

        tempChildFun(setText);
      });
  };

  const delBtn = (text) => {
    console.log(text);
    axios.post("/api/admin/deltext", { text }).then(() => {
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
    if (!text) return setBool(-1);
    setBool(-1);
    axios
      .post("/api/admin/edittext", { text, id })
      .then(() => {
        tempChildFun(setText);
      });
  };
  const changeFromBtn = (id,category) =>{
    console.log("체인지")
    setChangeFrom({category,id})
  }
  const changeToBtn = (id,category)=>{
    
    setChangeTo({category,id})
    console.log("프롬")
    console.log(changeFromArr)
    console.log("투")
    console.log(changeToArr.length)
  }
    useEffect(()=>{ 
    

    if(changeToArr){
      console.log(changeFromArr)
    console.log(changeToArr)
    if(changeToArr.id){
      axios.post("/api/admin/changesecond", {changeFromArr,changeToArr}).then((data)=>{
        alert(data.data);
        tempChildFun(setText);

      })
    }}
  },[changeToArr])
  return (
    <HelpCategoryDisplayComponent
      categoryArr={propsArr}
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
      c="category"
      d="카테고리"
      changeToBtn={changeToBtn}
      changeFromBtn={changeFromBtn}
    >
      <ThirdContainer propsArr={textArr} />
    </HelpCategoryDisplayComponent>
  );
};

export default SecondContainer;
