import BugReportComponent from "./Component";
import CreateContainer from "./Create/Container";
import { Route, Routes } from "react-router-dom";

const BugReportContainer = () => {
  return (
    <Routes>
      <Route path="/Create" element={<CreateContainer />}></Route>
      <Route path="/" element={<BugReportComponent />} />
    </Routes>
  );
};

export default BugReportContainer;
