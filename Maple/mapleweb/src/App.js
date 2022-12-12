import "./App.css";


import HeaderComponent from "./components/Home/header/header";

import AdministratorComponet from "./components/Administrator";
import HomeComponet from "./components/Home";
// import UserComponet from "./components/User";
import CommunityComponet from "./components/Community";
import SupportComponet from "./components/Support";
import { Link, Routes, Route } from "react-router-dom";

import BugReportContainer from "./components/Support/BugReport/Container";

import Menubar from "./components/Home/menubar/Menubar";

function App() {
  return (
    <div>
      <HomeComponet />
      <UserComponet />
      <CommunityComponet />

      {/* 나중에 합칠 때 홈 안에 커뮤니티 컴포넌트를 넣어야 한다. */}
      
      <Link to={"/"}>메인홈</Link>{" | "}
      <Link to={"/Community/Free"}>커뮤니티</Link><br />
      <Routes>
        <Route path="/Community/*" element={<CommunityComponet />}></Route>
      </Routes>

      <CommunityComponet />
      <Link to={"/Support"}>고객지원</Link>
      <Routes>
          <Route path="/" element={<HomeComponet />}></Route>
        <Route path="/news"></Route>
        <Route path="/Support/*" element={<SupportComponet />}></Route>

        <Route
          path="/Support/BugReport"
          element={<BugReportContainer />}
        ></Route>
      </Routes>
      <AdministratorComponet />


    </div>
  );
}

export default App;
