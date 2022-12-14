import styled from "styled-components";

import { useDispatch } from "react-redux";
import { action } from "../../modules/header";

import { Routes, Route, Link } from "react-router-dom";
import ServiceContainer from "./Service/Container";
import BugReportContainer from "./BugReport/Container";
const SupportComponet = () => {
  const dispatch = useDispatch();
  dispatch(action.header("Support"));
  return (
    <SupportBox>
      <div>
        <Link to={"./Service"}>도움말/1:1문의</Link>
      </div>
      <div>
        <Link to={"./BugReport"}>버그악용/불법프로그램 신고</Link>
      </div>
      <Routes>
        <Route path="/Service/*" element={<ServiceContainer />}></Route>
        <Route path="/BugReport/*" element={<BugReportContainer />}></Route>
      </Routes>
    </SupportBox>
  );
};

export default SupportComponet;

const SupportBox = styled.div``;
