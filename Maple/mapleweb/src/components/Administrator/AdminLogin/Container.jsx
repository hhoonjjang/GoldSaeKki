import AdminLoginComponent from "./Component";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../../../modules/admin";
import { useNavigate } from "react-router-dom";
const AdminLoginContainer = () => {
  console.log(document.cookie);
  console.log(document.cookie.split("=")[0]);
  const navigate = useNavigate();
  const isCookie = document.cookie;
  // if (document.cookie.split("=")[0] == "login") {
  //   alert("일반유저");

  //   navigate("/");
  // window.location.reload();
  // }
  const [accountInfo, setAccount] = useState({});
  const dispatch = useDispatch();
  console.log(accountInfo);
  const onClick = () => {
    axios.post("http://localhost:8080/api/admin/logout").then(
      () => {
        window.location.reload();
      },
      (error) => {
        console.error("에러");
      }
    );
    console.log("로그아웃버튼누름");
  };

  axios.post("http://localhost:8080/api/admin/login", accountInfo).then(
    function (data) {
      if (document.cookie) {
        alert("성공적으로 로그인했습니다");
      }
      // dispatch(action.login(data.data));
      window.location.reload();
    },
    (error) => {
      console.error("에러");
    }
  );
  const tempAdmin = useSelector((state) => state?.admin.name);
  console.log(tempAdmin);
  return (
    <AdminLoginComponent
      isCookie={isCookie}
      setAccount={setAccount}
      accountInfo={accountInfo}
      onClick={onClick}
      tempAdmin={tempAdmin}
    />
  );
};

export default AdminLoginContainer;
