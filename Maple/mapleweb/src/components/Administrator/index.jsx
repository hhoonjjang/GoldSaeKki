import { useDispatch } from "react-redux";
import { action } from "../../modules/header";
import styled from "styled-components";
import BugCSContainer from "./BugCs/Container";
const AdministratorComponet = () => {
  const dispatch = useDispatch();
  dispatch(action.header("Administrator"));
  return (
    <AdminBox>
      <BugCSContainer />
    </AdminBox>
  );
};

export default AdministratorComponet;

const AdminBox = styled.div``;
