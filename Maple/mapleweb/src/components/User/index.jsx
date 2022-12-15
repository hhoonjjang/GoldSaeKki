import RegistContainer from "../User/Regist/Container";
import LoginContainer from "../User/Login/Container";
import MypageContainer from "./MyPage/Container";
import { Route, Routes, useLocation, useParams } from "react-router-dom";

const UserComponent = () => {
  console.log(useLocation());
  let { params } = useParams();
  console.log(params);
  return (
    <div>
      <Routes>
        <Route path={"/regist"} element={<RegistContainer />}></Route>
        <Route path={"/login"} element={<LoginContainer />}></Route>
        <Route path={"/Mypage/*"} element={<MypageContainer />}></Route>
      </Routes>
    </div>
  );
};

export default UserComponent;
