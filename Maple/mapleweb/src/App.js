import "./App.css";

import HeaderContainer from "./components/Home/header/HeaderContainer";

import AdministratorComponet from "./components/Administrator";
import HomeComponet from "./components/Home";
// import UserComponet from "./components/User";
import CommunityComponet from "./components/Community";
import SupportComponet from "./components/Support";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import UserComponent from "./components/User";
import BugReportContainer from "./components/Support/BugReport/Container";
import Footer from "./components/Home/footer/Footer";
import Menubar from "./components/Home/menubar/Menubar";
import { useEffect } from "react";
import MypageContainer from "./components/User/MyPage/Container";
import axios from "axios";
import { action } from "./modules/user";
import { useDispatch } from "react-redux";

function App() {
  // const location = useLocation();
  // useEffect(() => {
  //   console.log(location.pathname);
  // }, [location]);
  const dispatch = useDispatch();
  const loginCheck = () => {
    if (document.cookie) {
      axios.post("http://localhost:8080/api/user/logincheck").then((data) => {
        dispatch(action.check(data.data.userInfo));
        console.log("로그인정보를 받았다", data);
        // currUser = data.data.userInfo.name;
        // console.log(currUser);
      });
    }
  };
  // loginCheck();
  return (
    <div>
      {/* {(location.pathname = "/Adminstrator" ? <></> : <Menubar />)} */}
      <Menubar />
      <Routes>
        {/* 메인페이지 헤더 */}
        <Route path="/News/*" element={<HeaderContainer />}></Route>
        <Route path="/Guide/*" element={<HeaderContainer />}></Route>
        <Route path="/Ranking/*" element={<HeaderContainer />}></Route>
        <Route path="/Community/*" element={<HeaderContainer />}></Route>
        <Route path="/Media/*" element={<HeaderContainer />}></Route>
        <Route path="/Support/*" element={<HeaderContainer />}></Route>
        <Route path="/Administrator/*" element={<HeaderContainer />}></Route>
        <Route path="/Mypage/*" element={<HeaderContainer />}></Route>
        {/* 기타 등등 헤더 */}
      </Routes>
      <UserComponent />

      {/* 나중에 합칠 때 홈 안에 커뮤니티 컴포넌트를 넣어야 한다. */}

      {/* <Link to={"/"}>메인홈</Link>
      {" | "}
      <Link to={"/Community/Free"}>커뮤니티</Link>
      <br />

      <Link to={"/Support"}>고객지원</Link> */}
      <Link to={"/Administrator"}>관리자</Link>
      <Routes>
        <Route path="/" element={<HomeComponet />}></Route>
        <Route path="/news"></Route>
        <Route path="/Support/*" element={<SupportComponet />}></Route>
        <Route
          path="/Administrator/*"
          element={<AdministratorComponet />}
        ></Route>
        {/* <Route path="/Mypage/*" element={<MypageContainer />}></Route> */}
        <Route path="/Community/*" element={<CommunityComponet />}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
