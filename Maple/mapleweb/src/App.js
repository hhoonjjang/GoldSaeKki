import logo from "./logo.svg";
import "./App.css";

import AdministratorComponet from "./components/Administrator";
import HomeComponet from "./components/Home";
import UserComponet from "./components/User";
import CommunityComponet from "./components/Community";
import SupportComponet from "./components/Support";
import { Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <HomeComponet /> */}
      {/* <UserComponet /> */}

      {/* 나중에 합칠 때 홈 안에 커뮤니티 컴포넌트를 넣어야 한다. */}
      <CommunityComponet />
      
      <Link to={"/Support"}>고객지원</Link>
      <Routes>
        <Route path="/Support" element={<SupportComponet />}></Route>
      </Routes>
      <AdministratorComponet />

    </div>
  );
}

export default App;
