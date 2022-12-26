import MypageComponent from "./Component";
import axios from "axios";
import { useDispatch } from "react-redux";
import { action } from "../../../modules/onImg";
import { useNavigate } from "react-router-dom";

const MypageContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getUserImg = (currUserName) => {
    console.log("요청하고있니??", currUserName);

    axios
      .post("http://localhost:8080/api/user/getImg", {
        currUserName: currUserName,
      })
      .then((data) => {
        console.log(data);
        dispatch(action.onImg(data.data));
      });
  };

  const checkLogin = (currUserName) => {
    if (currUserName == undefined) {
      console.log(currUserName);
      alert("로그인 후에 이용가능합니다."); // 이것때문에 뭔가 다음 처리가 안되거나 밀려서 navigate를 바로 쓰는 경우 안먹음 교수님께 물어볼것
      setTimeout(() => {
        navigate("/login");
      }, 100);
    }
  };
  return <MypageComponent getUserImg={getUserImg} checkLogin={checkLogin} />;
};

export default MypageContainer;
