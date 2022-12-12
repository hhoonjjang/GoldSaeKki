import RegistContainer from "../User/Regist/Container";
import LoginContainer from "../User/Login/Container";
import { Route, Routes } from "react-router-dom";

const UserComponent = () => {
  return (
    <div>
      <Routes>
        <Route path={"/join/regist"} element={<RegistContainer />}></Route>
        <Route path={"/join/login"} element={<LoginContainer />}></Route>
      </Routes>
    </div>
  );
};

export default UserComponent;
