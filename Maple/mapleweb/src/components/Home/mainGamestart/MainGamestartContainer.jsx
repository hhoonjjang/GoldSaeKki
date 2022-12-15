import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MainGamestartComponent from "./MainGamestartComponent";
import axios from "axios";
// const loginCheck = (setCurrUserName) => {
// if (document.cookie) {
// axios.post("http://localhost:8080/api/user/logincheck").then((data) => {
// console.log(data.data.userInfo.name);
// setCurrUserName(data.data.userInfo.name);
// });
// }
// };
const MainGamestartContainer = () => {
  const [_, setRender] = useState(false);
  // const [currUserName, setCurrUserName] = useState("");

  // useEffect(() => {
  // loginCheck(setCurrUserName);
  // });

  const logout = () => {
    document.cookie = "login" + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    setRender((state) => !state);
  };

  return (
    <MainGamestartComponent
      // currUserName={currUserName}
      logout={logout}
    ></MainGamestartComponent>
  );
};

export default MainGamestartContainer;
