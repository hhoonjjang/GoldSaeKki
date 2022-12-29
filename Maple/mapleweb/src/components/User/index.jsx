import RegistContainer from "../User/Regist/Container";
import LoginContainer from "../User/Login/Container";

import MypageContainer from "./MyPage/Container";
import { Route, Routes, useLocation } from "react-router-dom";
import NotFound from "../Community/NotFound";
const UserComponent = () => {

  return (
    <div>
      <Routes>
        <Route path={"/regist"} element={<RegistContainer />}></Route>
        <Route path={"/login"} element={<LoginContainer />}></Route>
        <Route path={"/mypage/:route"} element={<MypageContainer />}></Route>
        {/* useParams를 route라는 변수로 지정한 경우 route라는 키에 :route :뒤의 데이터가 값으로 들어간다. */}
        <Route path={"/mypage/*"} element={<MypageContainer />}></Route>
        <Route path={"/Error/*"} element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default UserComponent;

