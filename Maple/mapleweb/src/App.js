import AdministratorComponet from "./components/Administrator";
import HomeComponet from "./components/Home";
import UserComponet from "./components/User";
import CommunityComponet from "./components/Community";

function App() {
  return (
    <div>
      <HomeComponet />
      <UserComponet />
      <CommunityComponet />
      <AdministratorComponet />
    </div>
  );
}

export default App;
