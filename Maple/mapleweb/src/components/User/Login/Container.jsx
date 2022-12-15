import { useDispatch, useSelector } from "react-redux";
import LoginComponent from "./Component";
import axios from "axios";
import { action } from "../../../modules/user";
import crypto from "crypto-js";

let currUser = "";
const LoginContainer = () => {
  const dispatch = useDispatch();
  // const currUserName = useSelector((store) => store)
  // let tempCookie = document.cookie.split("=");
  // let cookieJwt = tempCookie[1];

  const loginCheck = () => {
    if (document.cookie) {
      axios.post("http://localhost:8080/api/user/logincheck").then((data) => {
        dispatch(action.check(data.data.userInfo.name));
        console.log("로그인정보를 받았다", data);
        // currUser = data.data.userInfo.name;
        // console.log(currUser);
      });
    }
  };
  const loginClick = (loginId, loginPw) => {
    console.log("로그인버튼 클릭해따");
    dispatch(action.login(loginId, loginPw));

    loginPw = crypto.SHA256(loginPw).toString();
    axios
      .post("http://localhost:8080/api/user/login", { loginId, loginPw })
      .then((data) => {
        console.log(data.data.status);
        loginCheck();
        // console.log(data);
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
