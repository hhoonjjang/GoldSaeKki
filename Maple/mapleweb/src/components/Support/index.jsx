import styled from "styled-components";

import { Routes, Route, Link } from "react-router-dom";
import ServiceContainer from "./Service/Container";
import BugReportContainer from "./BugReport/Container";
import CreateContainer from "./BugReport/Create/Container";
import "bootstrap/dist/css/bootstrap.min.css";

const SupportComponet = () => {
  return (
    <SupportBox>
      <div>
        <Link to={"./Service"}>도움말/1:1문의</Link>
      </div>
      <div>
        <Link to={"./BugReport"}>버그악용/불법프로그램 신고</Link>
      </div>
      <Routes>

        {/* <Route
          path="/Support/BugReport/Create"
          element={<CreateContainer />}
        ></Route> */}
        <Route path="/Service/*" element={<ServiceContainer />}></Route>
        <Route path="/BugReport/*" element={<BugReportContainer />}></Route>

      </Routes>
    </SupportBox>
  );
};

export default SupportComponet;

const SupportBox = styled.div``;
