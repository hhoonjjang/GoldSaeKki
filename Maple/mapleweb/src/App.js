import "./App.css";

import HeaderContainer from "./components/Home/header/HeaderContainer";

import AdministratorComponet from "./components/Administrator";
import HomeComponet from "./components/Home";
// import UserComponet from "./components/User";
import CommunityComponet from "./components/Community";
import SupportComponet from "./components/Support";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import UserComponent from "./components/User";
import MainSearchResultContainer from "./components/Home/mainSearchResult/MainSearchResultContainer";
// import NotFound from "./components/Community/NotFound";
import Footer from "./components/Home/footer/Footer";
import Menubar from "./components/Home/menubar/Menubar";
import axios from "axios";
import { action } from "./modules/user";
import { useDispatch } from "react-redux";
import { action as adminaction } from "./modules/admin";
import RankComponent from "./components/Ranking";
import NotFound from "./NotFound";
import NewsComponet from "./components/News";
import TopLogoContainer from "./components/Home/topLogo/TopLogoContainer";

function App() {
  // const location = useLocation();
  // useEffect(() => {
  //   console.log(location.pathname);
  // }, [location]);

  const dispatch = useDispatch();
  const location = useLocation();
  const adminLogin = () => {
    if (document.cookie) {
      axios
        .post("http://localhost:8080/api/admin/admincheck")
        .then(function (data) {
          console.log(data);
          // window.location.reload();
          dispatch(adminaction.login(data.data));
          console.log(data.data);
        });
    }
  };
  console.log(document.cookie.split("=")[0]);
  const loginCheck = () => {
    if (document.cookie.split("=")[0] == "login") {
      console.log("쿠키 들어왔다.");
      axios
        .post("http://localhost:8080/api/user/logincheck")
        .then((data) => {
          dispatch(action.check(data.data.userInfo));
          console.log("로그인정보를 받았다", data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
  console.log(location);
  document.cookie.split("=")[0] == "admin" ? adminLogin() : loginCheck();

  return (
    <div id="body_wrapper">
      <div id="body_content">
        {/* {(location.pathname = "/Adminstrator" ? <></> : <Menubar />)} */}
        <TopLogoContainer></TopLogoContainer>
        {location.pathname == "/regist" || location.pathname == "/login" ? (
          <></>
        ) : (
          <Menubar />
        )}
        <Routes>
          {/* 메인페이지 헤더 */}
          <Route path="/News/*" element={<HeaderContainer />}></Route>
          <Route path="/Ranking/*" element={<HeaderContainer />}></Route>
          <Route path="/Community/*" element={<HeaderContainer />}></Route>
          <Route path="/Support/*" element={<HeaderContainer />}></Route>
          <Route path="/Administrator/*" element={<HeaderContainer />}></Route>
          <Route path="/Mypage/*" element={<HeaderContainer />}></Route>
          <Route path="/Search/*" element={<HeaderContainer />}></Route>
          <Route path="/Error/*" element={<HeaderContainer />}></Route>
          {/* 기타 등등 헤더 */}
        </Routes>
        <UserComponent />

        {/* 나중에 합칠 때 홈 안에 커뮤니티 컴포넌트를 넣어야 한다. */}

        {/* <Link to={"/"}>메인홈</Link>
      {" | "}
      <Link to={"/Community/Free"}>커뮤니티</Link>
      <br />

      <Link to={"/Support"}>고객지원</Link> */}

        {/* <Link to={"/Administrator"}>관리자</Link> */}
        <Routes>
          <Route path="/" element={<HomeComponet />}></Route>
          <Route path="/News/*" element={<NewsComponet />}></Route>
          <Route path="/Support/*" element={<SupportComponet />}></Route>
          <Route
            path="/Administrator/*"
            element={<AdministratorComponet />}
          ></Route>
          {/* <Route path="/Mypage/*" element={<MypageContainer />}></Route> */}
          <Route path="/Community/*" element={<CommunityComponet />}></Route>
          <Route path="/Ranking/*" element={<RankComponent />}></Route>
          <Route
            path="/Search/*"
            element={<MainSearchResultContainer />}
          ></Route>

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
