import { useDispatch } from "react-redux";
import LoginComponent from "./Component";
import axios from "axios";
import { action } from "../../../modules/user";
import crypto from "crypto-js";

const LoginContainer = () => {
  const dispatch = useDispatch();

  const loginClick = (loginId, loginPw) => {
    console.log("로그인버튼 클릭해따");
    dispatch(action.login(loginId, loginPw));

    loginPw = crypto.SHA256(loginPw).toString();
    axios
      .post("http://localhost:8080/api/user/login", { loginId, loginPw })
      .then((data) => {
        console.log(data);
        // if(data.loginComplete === 1) {

        // }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return <LoginComponent loginClick={loginClick} />;
};

export default LoginContainer;
