import RegistComponent from "./Component";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../../../modules/regist";
const RegistContainer = () => {
  const dispatch = useDispatch();

  console.log("뭐라도 나오냐");
  const registClick = (userId, userPw, userName) => {
    console.log("우선 해보자");
    dispatch(action.regist(userId, userPw, userName));
  };
  return <RegistComponent registClick={registClick} />;
};

export default RegistContainer;
