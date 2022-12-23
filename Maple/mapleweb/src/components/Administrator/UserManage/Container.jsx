import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { action } from "../../../modules/header";
import UserManageComponent from "./Component";

const userArrFun = async (setUser) => {
  try {
    let userArr = (
      await axios.post("http://localhost:8080/api/admin/displayuser")
    ).data;
    setUser(userArr);
  } catch (err) {
    console.error(err);
  }
};

const UserManageContainer = () => {
  const [userArr, setUser] = useState([]);
  const [tempUser, setTemp] = useState([]);
  useEffect(() => {
    userArrFun(setUser);
  }, []);
  useEffect(() => {
    console.log(tempUser);
  }, [tempUser]);
  console.log(userArr);
  const userSubmit = (user) => {
    axios
      .post("http://localhost:8080/api/admin/searchuser", {
        user,
      })
      .then((data) => {
        console.log(data.data);
        if (!data.data.userName) return alert("존재하지않는 회원입니다.");
        setTemp(data.data);
      });
  };
  const delBtn = (userName) => {
    console.log(userName);
    axios
      .post("http://localhost:8080/api/admin/deluser", { userName })
      .then((data) => {
        alert(data.data);
        userArrFun(setUser);
        setTemp("");
      });
  };
  const msgSubmit = (msg, userName) => {
    axios.post("http://localhost:8080/api/admin/sendmsg", { msg, userName });
  };
  const stateName = useSelector((state) => state?.admin);
  console.log(tempUser);
  const boardDel = (id, user) => {
    axios
      .post("http://localhost:8080/api/admin/deluserboard", { id, user })
      .then((data) => {
        alert(data.data.msg);
        setTemp(data.data.tempUser);
      });
  };
  const commentDel = (id, user) => {
    axios
      .post("http://localhost:8080/api/admin/delusercomment", { id, user })
      .then((data) => {
        alert(data.data.msg);
        setTemp(data.data.tempUser);
      });
  };
  return (
    <UserManageComponent
      tempUser={tempUser}
      userArr={userArr}
      userSubmit={userSubmit}
      delBtn={delBtn}
      msgSubmit={msgSubmit}
      stateName={stateName}
      boardDel={boardDel}
      commentDel={commentDel}
    />
  );
};

export default UserManageContainer;
