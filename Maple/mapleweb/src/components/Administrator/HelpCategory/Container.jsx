import axios from "axios";
import HelpCategoryComponent from "./Component";

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

const HelpCategoryContainer = () => {
  const categorySubmit = async (value) => {
    if (!value) return alert("내용을 입력하세요");
    axios
      .post("http://localhost:8080/api/admin/category", { value })
      .then(() => {
        alert("추가되었습니다");
        window.location.reload();
      });
  };

  return <HelpCategoryComponent categorySubmit={categorySubmit} />;
};

export default HelpCategoryContainer;
