import axios from "axios";
import HelpCategoryComponent from "./Component";

const HelpCategoryContainer = () => {
  const categorySubmit = async (value) => {
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
