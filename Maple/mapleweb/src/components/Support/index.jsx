import styled from "styled-components";

import { useDispatch } from "react-redux";
import { action } from "../../modules/header";

import { Routes, Route, Link } from "react-router-dom";
import ServiceContainer from "./Service/Container";
import BugReportContainer from "./BugReport/Container";
import { useEffect } from "react";

const SupportComponet = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action.header("Support"));
  }, []);
  return (
    <SupportBox>
      <Routes>
        <Route path="/Service/*" element={<ServiceContainer />}></Route>
        <Route path="/BugReport/*" element={<BugReportContainer />}></Route>
      </Routes>
    </SupportBox>
  );
};

export default SupportComponet;

const SupportBox = styled.div``;
