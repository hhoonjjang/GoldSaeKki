import AdminLoginComponent from "./Component";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../../../modules/admin";
// import { useNavigate } from "react-router-dom";

const AdminLoginContainer = ( {setRender,_render}) => {
  console.log(document.cookie);
  console.log(document.cookie.split("=")[0]);
  // const navigate = useNavigate();
  const isCookie = document.cookie;
  // if (document.cookie.split("=")[0] == "login") {
  //   alert("일반유저");

  //   navigate("/");
  // window.location.reload();
  // }
  const dispatch = useDispatch();

  const onClick = () => {
    axios.post("/api/admin/logout").then(() => {
      dispatch(action.logout());
    }).then(()=>{
      alert("로그아웃했습니다.")
    setRender(!_render)

    });
  };

  const infoSubmit = (value) => {
    axios.post("/api/admin/login", value).then(
      function (data) {
        if (document.cookie.split("=")[0] == "admin") {
          // alert("성공적으로 로그인했습니다");
          dispatch(action.check(data.data));
        }
        // window.location.reload();
      }
      //   console.error("에러");
      // }
    ).then(()=>{
      alert("로그인했습니다.")
      setRender(!_render)
      
    });
  };

  // useEffect(() => {
  //   axios.post("/api/admin/login", accountInfo).then(
  //     function (data) {
  //       if (document.cookie) {
  //         // alert("성공적으로 로그인했습니다");
  //         dispatch(action.check(data.data));
  //       }
  //       // window.location.reload();
  //     }
  //     // (error) => {
  //     //   console.error("에러");
  //     // }
  //   );
  // }, []);
  const tempAdmin = useSelector((state) => state?.admin.name);

  console.log(tempAdmin);
  return (
    <AdminLoginComponent
      isCookie={isCookie}
      onClick={onClick}
      tempAdmin={tempAdmin}
      infoSubmit={infoSubmit}
    />
  );
};

export default AdminLoginContainer;
