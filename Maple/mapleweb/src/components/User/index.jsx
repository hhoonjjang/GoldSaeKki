import RegistContainer from "../User/Regist/Container";
import LoginContainer from "../User/Login/Container";

import MypageContainer from "./MyPage/Container";
import { Route, Routes, useLocation } from "react-router-dom";

const UserComponent = () => {
  console.log(useLocation());

  return (
    <div>
      <Routes>
        <Route path={"/regist"} element={<RegistContainer />}></Route>
        <Route path={"/login"} element={<LoginContainer />}></Route>
        <Route path={"/mypage/:route"} element={<MypageContainer />}></Route>
        <Route path={"/mypage/*"} element={<MypageContainer />}></Route>
      </Routes>
    </div>
  );
};

export default UserComponent;
