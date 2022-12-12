import logo from "./logo.svg";
import "./App.css";

import HeaderComponent from "./components/Home/header/header";
import AdministratorComponet from "./components/Administrator";
import HomeComponet from "./components/Home";
import UserComponet from "./components/User";
import CommunityComponet from "./components/Community";
import SupportComponet from "./components/Support";
import { Link, Routes, Route } from "react-router-dom";
import Menubar from "./components/Home/menubar/Menubar";

function App() {
  return (
    <div>
      <HeaderComponent />
      <UserComponet />
      <CommunityComponet />
      <Link to={"/Support"}>고객지원</Link>
      <Routes>
        <Route path="/" element={<HomeComponet />}></Route>
        <Route path="/news"></Route>
        <Route path="/Support/*" element={<SupportComponet />}></Route>
      </Routes>
      <AdministratorComponet />
      {/* AdministratorComponent는 지금은 Route에 없기 때문에 "/"에서 기본적으로 보일 것이다. */}
    </div>
  );
}

export default App;
