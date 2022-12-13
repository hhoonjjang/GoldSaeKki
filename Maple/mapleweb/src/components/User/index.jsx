import RegistContainer from "../User/Regist/Container";
import LoginContainer from "../User/Login/Container";
import { Route, Routes, useLocation } from "react-router-dom";

const UserComponent = () => {
  const location = useLocation();
  console.log(useLocation);
  return (
    <div>
      <Routes>
        <Route path={"/regist"} element={<RegistContainer />}></Route>
        <Route path={"/login"} element={<LoginContainer />}></Route>
      </Routes>
    </div>
  );
};

export default UserComponent;
