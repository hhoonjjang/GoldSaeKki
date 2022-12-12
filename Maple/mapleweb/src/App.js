import AdministratorComponet from "./components/Administrator";
import HomeComponet from "./components/Home";
import UserComponet from "./components/User";
import CommunityComponet from "./components/Community";
import SupportComponet from "./components/Support";
import { Link, Routes, Route } from "react-router-dom";
import BugReportContainer from "./components/Support/BugReport/Container";
function App() {
  return (
    <div>
      <HomeComponet />
      <UserComponet />
      <CommunityComponet />
      <Link to={"/Support"}>고객지원</Link>
      <Routes>
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
