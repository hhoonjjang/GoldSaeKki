import logo from "./logo.svg";
import "./App.css";

import AdministratorComponet from "./components/Administrator";
import HomeComponet from "./components/Home";
import UserComponet from "./components/User";
import CommunityComponet from "./components/Community";

function App() {
  return (
    <div>
      {/* <HomeComponet /> */}
      {/* <UserComponet /> */}

      {/* 나중에 합칠 때 홈 안에 커뮤니티 컴포넌트를 넣어야 한다. */}
      <CommunityComponet />

      {/* <AdministratorComponet /> */}
    </div>
  );
}

export default App;
