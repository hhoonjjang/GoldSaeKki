import RegistContainer from "../User/Regist/Container";
import LoginContainer from "../User/Login/Container";
import MypageContainer from "./MyPage/container";
import { Route, Routes } from "react-router-dom";

const UserComponent = () => {
  return (
    <div>
      <Routes>
        <Route path={"/regist"} element={<RegistContainer />}></Route>
        <Route path={"/login"} element={<LoginContainer />}></Route>
        <Route path={"/mypage"} element={<MypageContainer />}></Route>
      </Routes>
    </div>
  );
};

export default UserComponent;
