import RegistComponent from "./Component";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../../../modules/regist";
import crypto from "crypto-js";
import axios from "axios";
const RegistContainer = () => {
  const dispatch = useDispatch();

  console.log("뭐라도 나오냐");
  const registClick = (userId, userPw, userName) => {
    console.log("우선 해보자");
    dispatch(action.regist(userId, userPw, userName));

    userPw = crypto.SHA256(userPw).toString();
    axios
      .post("http://localhost:8080/api/user/regist", {
        userId,
        userPw,
        userName,
      })
      .then((data) => {
        console.log("데이터가 DB에 잘 도착했어" + data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return <RegistComponent registClick={registClick} />;
};

export default RegistContainer;
