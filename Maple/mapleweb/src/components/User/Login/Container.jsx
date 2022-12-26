import { useDispatch } from "react-redux";
import LoginComponent from "./Component";
import axios from "axios";
import { action } from "../../../modules/user";
import crypto from "crypto-js";
import { useNavigate } from "react-router-dom";

// let currUser = "";
const LoginContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const loginCheck = () => {
  // if (document.cookie) {
  // axios.post("http://localhost:8080/api/user/logincheck").then((data) => {
  // dispatch(action.check(data.data.userInfo.name));
  // console.log("로그인정보를 받았다", data);
  // currUser = data.data.userInfo.name;
  // console.log(currUser);
  // });
  // }
  // };

  const loginClick = (loginId, loginPw) => {
    console.log("로그인버튼 클릭해따");

    loginPw = crypto.SHA256(loginPw).toString();
    axios
      .post("http://localhost:8080/api/user/login", { loginId, loginPw })
      .then((data) => {
        console.log(data.data.data);
        if (data.data.status == 200) {
          alert("로그인 성공");
          dispatch(action.login(data.data.data));
          navigate("/");
        } else {
          if (data.data.status == 502) {
            alert("존재하지 않는 ID입니다.");
          } else alert("잘못된 비밀번호입니다.");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return <LoginComponent loginClick={loginClick} />;
};

export default LoginContainer;
