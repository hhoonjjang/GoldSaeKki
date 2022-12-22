import axios from "axios";
import { useEffect, useState } from "react";
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
  const [tempuser, setTemp] = useState([]);
  useEffect(() => {
    userArrFun(setUser);
  }, []);
  useEffect(() => {
    console.log(tempuser);
  }, [tempuser]);
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
  console.log(tempuser);
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
  console.log(userArr);
  const msgSubmit = (msg, userName) => {
    console.log(msg);
    console.log(userName);
    axios.post("http://localhost:8080/api/admin/sendmsg", { msg, userName });
  };
  return (
    <UserManageComponent
      tempuser={tempuser}
      userArr={userArr}
      userSubmit={userSubmit}
      delBtn={delBtn}
      msgSubmit={msgSubmit}
    />
  );
};

export default UserManageContainer;
